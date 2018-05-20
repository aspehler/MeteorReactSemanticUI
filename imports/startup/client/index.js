import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

import 'semantic-ui-css/semantic.min.css';
import '../../ui/stylesheets/app.css';

import App from '../../ui/layouts/App';

Meteor.startup(() => render(<App />, document.getElementById('react-root')));
