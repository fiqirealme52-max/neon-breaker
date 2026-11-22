# Neon Breaker — one prompt, one game

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/fiqirealme52-max/neon-breaker/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/fiqirealme52-max/neon-breaker/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

Entry for the make.fun bounty [The agent builds a game from one prompt](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709) ($20).

One prompt — *"Build a neon Breakout game in one HTML file..."* — became **Neon Breaker**: a neon Breakout game (paddle, bouncing ball, colourful bricks that burst into particles, score, 3 lives, faster every level, win + game over screens) that really runs in the browser. The video on X shows the prompt, the agent typing the game, and the finished game being played — ending with make.fun's referral end card.

`main.ts` (Node 22, stdlib only) copies `POST.json` from this repository to `/output/POST.json`, where the gate reads the X post's address. The post itself is the entry: the house reads its views, likes, reposts, quotes and replies from X.

## Run

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.
