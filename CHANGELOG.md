# Changelog

All notable changes to the Personal Portfolio project will be documented in this file. This project adheres to [Semantic Versioning](https://semver.org/).

## [3.0.1] (2023-09-20)

### Fixed

- Resolve missing lodash dependencies to fix Docker build failure.

## [3.0.0] (2023-09-20)

### Added

- Added experience data to constants.
- Added experience section.
- Created a higher-order wrapper component and enable stagger animations and achor links.
- Introduced index files for easier imports.
- Implemented functionality to automatically highlight the currently selected navigation item upon user selection.

### Changed

- Updated favicon.
- Moved logic for checking if device is mobile to parent component and pass bool value as props.
- Moved all framer-motion animation logic to a separate utils file.

### Fixed

- Fixed heading text on mobile view.

## [2.2.3] (2023-08-28)

### Added

- Added step in deploy job to invalidate caches on CloudFront when S3 bucket is synced.

### Changed

- Updated CV.

## [2.2.2] (2023-08-28)

### Added

- Added an additional build step to the GitHub Actions workflow to improve code quality and enhance the deployment process.

### Changed

- Updated the CI/CD section of the README to include new changes in the workflow.

### Fixed

- Fixed the file path so you can now download the CV.

## [2.2.1] (2023-08-27)

### Added

- Added `constants.ts` file and added all hardcoded strings.

### Changed

- Removed all hardcoded strings from `.tsx` files.
- Moved CV file to `public/` folder.
- Updated deploy.yml to deploy static web content to S3 bucket.

## [2.2.0] (2023-08-21)

### Changed

- Moved `models/` and `animations/` folders into `public/`.
- Updated path definitions for the models.

## [2.1.0] (2023-08-20)

### Added

- Added image of 3D model.

### Changed

- Removed 3D model and replace it with image of avatar.

## [2.0.0] (2023-08-20)

### Added

- Added motion animations to navigation items.
- Added 3D avatar model to landing page with a default sitting animation.
- Added functionality to make avatar's head follow the cursor when within a certain range.

### Changed

- Changed icon package from `heroicons` to `tabler`.
- Updated CV.

### Fixed

- Fixed initial menu state to be closed on mobile view when wesbite is reloaded.

## [1.0.0] (2023-08-20)

### Added

- Added `CHANGELOG.md` to log all changes.

### Changed

- Updated `deploy.yml` file to follow semantic versioning.
- Updated `README.md`.

[3.0.1]: https://github.com/AbdulMiah/Portfolio/releases/tag/v3.0.1
[3.0.0]: https://github.com/AbdulMiah/Portfolio/releases/tag/v3.0.0
[2.2.3]: https://github.com/AbdulMiah/Portfolio/releases/tag/v2.2.3
[2.2.2]: https://github.com/AbdulMiah/Portfolio/releases/tag/v2.2.2
[2.2.1]: https://github.com/AbdulMiah/Portfolio/releases/tag/v2.2.1
[2.2.0]: https://github.com/AbdulMiah/Portfolio/releases/tag/v2.2.0
[2.1.0]: https://github.com/AbdulMiah/Portfolio/releases/tag/v2.1.0
[2.0.0]: https://github.com/AbdulMiah/Portfolio/releases/tag/v2.0.0
[1.0.0]: https://github.com/AbdulMiah/Portfolio/releases/tag/v1.0.0
