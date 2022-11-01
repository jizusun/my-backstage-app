import { createPlugin, createRoutableExtension, createComponentExtension } from '@backstage/core-plugin-api';
import { rootRouteRef } from './routes';

export const myPluginPlugin = createPlugin({
  id: 'my-plugin',
  routes: {
    root: rootRouteRef,
  },
});

export const MyPluginPage = myPluginPlugin.provide(
  createRoutableExtension({
    name: 'MyPluginPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);


export const MyPluginEntityContent = myPluginPlugin.provide(
  createComponentExtension({
    name: "EntityMyPlugin",
    component: {
      lazy: () => import('./components/ExampleComponent').then((m) => m.ExampleComponent)
    }
  })
)