import {registerRoot} from 'remotion';
// import {getFont} from './font';
import {RemotionRoot} from './Root';

// FIXME: Vitest does not recognize it as a function
if (typeof registerRoot === 'function') {
	registerRoot(RemotionRoot);
}

// getFont();
