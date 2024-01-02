# Changelog

All notable changes to the Personal Portfolio project will be documented in this file. This project adheres to [Semantic Versioning](https://semver.org/).

## [7.0.0] (2023-01-01)

### Added

- Added a footer to the bottom of the webpage.
- Created the contact section with custom form.
- Implemented form validation.
- Using `sessionStorage`, allow users to send only one message per session.
- Added a 3D model of a retro telephone to contact section.

### Changed

- Modified the `IconButton` component to include the option to disable the button.

### Fixed

- Disabled pan on Avatar model in the About section.
- Resolved the loading screen issue by hidding the Landing page and disabling pointer events during the application loading process.

## [6.0.0] (2023-12-28)

### Added

- Added IDs to all projects.
- Created routes for project detail pages.
- Added demo videos for all projects.
- Added monitor and phone models and allow user to interact and view demo videos on the 3D models.
- Implemented a color attribute for each project, displaying sparkling effects in the corresponding color when in light mode. Display stars when in dark mode.
- Introduced a project navigator to allow users to easily navigated between project detail pages.

### Changed

- Added a tooltip on the `View Project` button for each Project Card.

### Fixed

- Fixed the show more projects button `onClick` attribute being triggered on whitespace.

## [5.1.1] (2023-12-16)

## Changed

- Changed the URL for the project list page from `/projects/all` to `/project/all`.

### Fixed

- Adjusted the back button on the project list page to prevent accidental onClick triggers.
- Centerd the interest description in About section.
- Fixed the `X` button onClick triggering on whitespace.
- Fixed the About section animations triggering early when landing page is rendered.

## [5.1.0] (2023-12-07)

### Added

- Used `react-router-dom` to create and handle routes.
- Added a close button to carousel modals.
- Used the Tooltip API from mui material library.
- Implemented a skeleton loader with avatar and linear progress bar for initial website rendering.
- Utilised `sessionStorage` to track if site has been initially loaded to decide whether to show the loader.
- Added other project data and screenshots.

### Changed

- Modified `ProjectCard` component to move the map logic outside of the component.
- Moved all main components into a Home component.
- Collapse menu when toggling between light and dark mode in mobile view.

### Fixed

- Fixed hover animations not returning to initial state after being hovered over.

## [5.0.1] (2023-11-20)

### Added

- Added scale animation while hovering over images in carousel.

### Changed

- Display a summary list for projects descriptions instead of a full description.

### Fixed

- Fixed animations not triggering on long components that are scrolled out of view.

## [5.0.0] (2023-11-10)

### Added

- Inserted 'projects' data to constants.
- Added screenshots for projects.
- Created a carousel using `Swiper` npm package.
- Added modal for enlarged image viewing from carousel.

### Changed

- Changed skills to include icons.
- Updated main scrollbar to have custom styling.
- Added types to all constants.

### Fixed

- Fixed heading size for experience section.

## [4.0.0] (2023-10-08)

### Added

- Inserted 'about' data to constants.
- Added 'about me' section.
- Added avatar to about section with new animation.
- Created a scroll to top button.
- Added smooth scroll behaviour when clicking on anchor links.

### Changed

- Updated skills for experience constants.
- Change cursor style to default while hovering over skills.

### Fixed

- Hide navigation bar when clicking on a nav item while in mobile view.

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
- Moved all `framer-motion` animation logic to a separate utils file.

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
- Updated `deploy.yml` to deploy static web content to S3 bucket.

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

[7.0.0]: https://github.com/AbdulMiah/Portfolio/releases/tag/v7.0.0
[6.0.0]: https://github.com/AbdulMiah/Portfolio/releases/tag/v6.0.0
[5.1.1]: https://github.com/AbdulMiah/Portfolio/releases/tag/v5.1.1
[5.1.0]: https://github.com/AbdulMiah/Portfolio/releases/tag/v5.1.0
[5.0.1]: https://github.com/AbdulMiah/Portfolio/releases/tag/v5.0.1
[5.0.0]: https://github.com/AbdulMiah/Portfolio/releases/tag/v5.0.0
[4.0.0]: https://github.com/AbdulMiah/Portfolio/releases/tag/v4.0.0
[3.0.1]: https://github.com/AbdulMiah/Portfolio/releases/tag/v3.0.1
[3.0.0]: https://github.com/AbdulMiah/Portfolio/releases/tag/v3.0.0
[2.2.3]: https://github.com/AbdulMiah/Portfolio/releases/tag/v2.2.3
[2.2.2]: https://github.com/AbdulMiah/Portfolio/releases/tag/v2.2.2
[2.2.1]: https://github.com/AbdulMiah/Portfolio/releases/tag/v2.2.1
[2.2.0]: https://github.com/AbdulMiah/Portfolio/releases/tag/v2.2.0
[2.1.0]: https://github.com/AbdulMiah/Portfolio/releases/tag/v2.1.0
[2.0.0]: https://github.com/AbdulMiah/Portfolio/releases/tag/v2.0.0
[1.0.0]: https://github.com/AbdulMiah/Portfolio/releases/tag/v1.0.0
