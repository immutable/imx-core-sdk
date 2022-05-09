# Immutable Core SDK

## Smart contract autogeneration

### Libraries

- https://hardhat.org/guides/compile-contracts.html
- https://www.npmjs.com/package/@typechain/hardhat

## Changelog Management

This repository is using release-it to manage the CHANGELOG.md

The following headings should be used as appropriate

- Added
- Changed
- Deprecated
- Removed
- Fixed
- Security

What follows is an example with all the change headings, for real world use only use headings when appropriate.
This goes at the top of the CHANGELOG.md above the most recent release.

```markdown
...
## [Unreleased]

### Added 

for new features.

### Changed 

for changes in existing functionality.

### Deprecated 

for soon-to-be removed features.

### Removed 

for now removed features.

### Fixed

for any bug fixes.

### Security

in case of vulnerabilities.

...
```

The package.json will hold the value of the previous release
```json
...
"version": "0.3.0",
...
```

When PR is ready for review, the submitter should run:

`npm run release`

- Choose release type (patch|minor|major)
- Choose yes to use changelog and package.json
- Add a tag if required - this step can be skipped by replying `no`
- Push to remote by using yes