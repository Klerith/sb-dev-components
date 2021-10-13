# Notas

## Semantic-Release
https://github.com/semantic-release/commit-analyzer#default-rules-matching

## Notas:
Commits with a breaking change will be associated with a major release.
Commits with type 'feat' will be associated with a minor release.
Commits with type 'fix' will be associated with a patch release.
Commits with type 'perf' will be associated with a patch release.
Commits with scope no-release will not be associated with a release type even if they have a breaking change or the type 'feat', 'fix' or 'perf'.