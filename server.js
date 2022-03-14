import express from "express";
import serveStatic from "serve-static";
import { join } from "path";
import history from 'connect-history-api-fallback';
const app = express();

app.use(history({
	// verbose: true
}));

app.use(serveStatic(join(__dirname, "dist")));

// const port = process.env.PORT || 3000;

app.set('port', (process.env.PORT || 8080));

app.listen(app.get('port'), () => {
	console.log(`ENV: ${process.env.NODE_ENV}`);
	console.log(`Derp is running at localhost: ${app.get('port')}`);
});
