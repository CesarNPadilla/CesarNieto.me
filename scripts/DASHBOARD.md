# Project dashboard

English: `/projects/`. Spanish: `/es/projects/`. Both portfolio navigation bars link to these pages.

Edit `assets/data/projects.json` to curate bilingual summaries, technologies, stage, next action, and verified demo URLs. Do not infer lifecycle stages from push frequency. `stageSource` identifies explicit documentation; keep it current when changing a stage.

Run `python scripts/refresh-projects.py` to refresh public GitHub evidence. An optional `GH_TOKEN` increases API limits. The collector saves only selected public fields, never credentials, and replaces the snapshot only after every request succeeds. On failure, the previous file remains intact.

The workflow `.github/workflows/project-data.yml` schedules collection hourly and supports manual dispatch. It must be present on the default branch, with Actions and workflow write permissions enabled. Scheduled execution can be delayed by GitHub. It commits only the generated snapshot. Branch protection may require a different persistence strategy.

Publishing is separate: commits made with `GITHUB_TOKEN` do not trigger a branch-based GitHub Pages build. To publish hourly snapshots automatically, configure a Pages deployment job after collection or use the existing hosting pipeline with an appropriate deployment trigger. Until that integration is configured, refresh and publish the snapshot through the normal site release process. No hosting settings were changed by this implementation.

The browser shows saved data, not a live API connection. Data older than two hours is marked delayed. Missing snapshot data leaves curated summaries usable; missing curated data displays a repository link. Without JavaScript, a GitHub repository link remains available.

The maintenance view promotes projects whose latest returned default-branch workflow failed. It does not infer business priority or blockers. Workflow evidence includes workflow name, timestamp, commit, and source link; deployments are not treated as test coverage. Issue/PR management, contributor details, historical charts, a global update feed, stage filtering, and dedicated detail pages are future extensions; this version uses expandable evidence sections.
