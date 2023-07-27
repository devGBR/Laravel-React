import './bootstrap';

import { createInertiaApp } from '@inertiajs/react'
import ReactDOM from 'react-dom';
import React from 'react';

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    return pages[`./Pages/${name}.jsx`]
  },
  setup({ el, App, props }) {
    ReactDOM.render(<App {...props} />, el);
  },
})
