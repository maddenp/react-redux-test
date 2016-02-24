import chai from 'chai';
import spies from 'chai-spies';
import { jsdom } from 'jsdom';

chai.use(spies);

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;
