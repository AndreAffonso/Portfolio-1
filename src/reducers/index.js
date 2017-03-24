import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import posts from './posts';
import comments from './comments';
import projects from './projects';

const rootReducer = combineReducers({projects, posts, comments, routing: routerReducer})

export default rootReducer
