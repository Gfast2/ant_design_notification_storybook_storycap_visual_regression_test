# storybook-antd-storycap

Here is trying to reproduce the limitation of [storycap][https://github.com/reg-viz/storycap#managed-mode] which will run the visual regression test with storybook.

In story `App.stories.tsx` there should be a notification triggered automatically (through storybook [`play`][https://storybook.js.org/docs/react/writing-stories/play-function]). This can be seen in live. And should be captured by storycap. But it doesn't.

## how to reproduce

### 1. init project

After checkout repo.

```sh
npm install
```

### 2. start storybook dev server

```sh
npm run storybook
```

### 3. run visual regression test

```sh
npm run storycap
```

After this step, you may got newly created png file under `/.reg`. You can tell from the image all the element are captured in the file except the notification itself.

