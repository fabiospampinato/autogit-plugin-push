
/* IMPORT */

import chalk from 'chalk';
import * as simpleGit from 'simple-git/promise';

/* PUSH */

const defaultOptions = {
  remote: 'origin',
  branch: ''
};

function factory ( customOptions?: Partial<typeof defaultOptions> ) {

  const options = Object.assign ( {}, defaultOptions, customOptions );

  return async function push ( config, repoPath, ctx, task ) {

    const git = simpleGit ( repoPath ),
          branch = options.branch || ( await git.branchLocal () ).current;

    task.title = `push ${chalk.gray ( `${options.remote}/${branch}` )}`;

    const remotes = await git.getRemotes ( true ),
          remote = remotes.find ( remote => remote.name === options.remote );

    if ( !remote ) return task.skip ( `Remote "${options.remote}" not found` );

    task.output = `Pushing to "${options.remote}/${branch}"...`;

    if ( config.dry ) return task.skip ();

    await git.push ( options.remote, branch );

    task.output = `Pushed to "${options.remote}/${branch}"`;

  };

}

/* EXPORT */

export default factory;
