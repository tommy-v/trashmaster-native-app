# General documentation (TODO clean up and organize) <!-- omit in toc -->

- [What about IDEWorkspaceChecks.plist?](#what-about-ideworkspacechecksplist)
- [🚨 Troubleshooting](#-troubleshooting)
  - [Location issue](#location-issue)
  - [Path issue](#path-issue)
- [Divers](#divers)
      - [README Badges](#readme-badges)
      - [Navigation](#navigation)

## What about IDEWorkspaceChecks.plist?

You can take a look on the Xcode release notes: https://developer.apple.com/library/content/releasenotes/DeveloperTools/RN-Xcode/Chapters/Introduction.html

> Xcode 9.3 adds a new IDEWorkspaceChecks.plist file to a workspace's shared data, to store the state of necessary workspace checks. Committing this file to source control will prevent unnecessary rerunning of those checks for each user opening the workspace. (37293167)

It's good to commit it to the repository.

From: https://stackoverflow.com/questions/50367896/ideworkspacechecks-plist-file-suddenly-appear-after-updated-xcode?noredirect=1&lq=1

## 🚨 Troubleshooting

### Location issue

**Error message**: <p style="color: red;">"unable to retrieve location", PERMISSION_DENIED:1,POSITION_UNAVAILABLE: 2</p> 

**Platform**: IOS (Simulator)

**Solution**
> Click your simulator then Select Features > Location > Custom Location.

*From https://github.com/react-native-community/react-native-geolocation/issues/108*

### Path issue

**Error message**: <p style="color: red;"> react native configure: WARNING: 'missing' script is too old or missing</p>

**Platform**: IOS (Simulator)

**Solution**: 

`sudo xcode-select --switch /Applications/Xcode.app`

> The Path to iphoneos is not set. Run this on CLI to set it:  sudo xcode-select --switch /Applications/Xcode.app
From: https://stackoverflow.com/questions/53028367/glog-configure-warning-missing-script-is-too-old-or-missing

## Divers

##### README Badges

From https://shields.io

##### Navigation

TODO Fill it.

https://reactnavigation.org/docs/navigation-prop/ props navigation `props.navigation`
