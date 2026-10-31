"""Collect public repository evidence; retain the previous snapshot on failure."""
import datetime
import json
import os
from pathlib import Path
import urllib.request

ROOT = Path(__file__).resolve().parents[1]


def get(path):
    headers = {'Accept': 'application/vnd.github+json', 'User-Agent': 'Cesar-project-dashboard'}
    if os.environ.get('GH_TOKEN'):
        headers['Authorization'] = 'Bearer ' + os.environ['GH_TOKEN']
    request = urllib.request.Request('https://api.github.com/' + path, headers=headers)
    with urllib.request.urlopen(request, timeout=30) as response:
        return json.load(response)


def main():
    projects = json.loads((ROOT / 'assets/data/projects.json').read_text(encoding='utf-8'))
    result = []
    for project in projects:
        base = 'repos/CesarNPadilla/' + project['slug']
        repo = get(base)
        # Use default-branch runs only; preserve workflow identity and commit.
        runs = get(base + '/actions/runs?per_page=10&branch=' + repo['default_branch'])['workflow_runs']
        releases = get(base + '/releases?per_page=1')
        result.append({
            'slug': project['slug'], 'pushedAt': repo['pushed_at'],
            'archived': repo['archived'], 'stars': repo['stargazers_count'],
            'forks': repo['forks_count'],
            'runs': [{'name': r['name'], 'status': r['status'], 'conclusion': r['conclusion'],
                      'url': r['html_url'], 'at': r['updated_at'], 'sha': r['head_sha']}
                     for r in runs],
            'release': ({'name': releases[0]['tag_name'], 'at': releases[0]['published_at'],
                         'url': releases[0]['html_url']} if releases else None)
        })
    snapshot = {'fetchedAt': datetime.datetime.now(datetime.timezone.utc).isoformat(), 'projects': result}
    target = ROOT / 'assets/data/github.json'
    temporary = target.with_suffix('.tmp')
    temporary.write_text(json.dumps(snapshot, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    temporary.replace(target)


if __name__ == '__main__':
    main()
