# DataStructures-Algorithms
Showcasing my experience solving popular LeetCode problems, along with templates to how to solving questions on your own that run through Unit Tests to check for completion.

## Table of Contents
[Recommendations for development:](https://https://github.com/0bro/DataStructures-Algorithms#recommendations-for-development)



### **Recommendations** for development:

Install VSCode extention `TODO Highlight` to visualize and query all flags. The flags are:

- `TODO:` A Task that is required to be done within this function, block, or line
- `BUG:` A definition of Bug that is occuring originating from this block/area
- `TOFIX:` Instructions on how to fix a problem that is code breaking
- `ISSUE:` An Issue that isn't a bug, and also doesn't break the runtime.
- `IDEA:` A proposal for an idea to how we can either fix a `BUG:`, `ISSUE:`, or to change the codebase.
- `TEST:` Requires testing to complete test coverage

To add these keywords, follow these steps to install `TODO Highlight`:

1. Find `TODO Highlight` in EXTENTIONS: MARKETPLACE
2. Install and wait for Install
3. After Installation, click the gear icon that appears near where the install button one.
4. Choose "Extension Settings"
5. Find any option and Choose the "<ins>Edit in Settings.json</ins>"
6. Find the `todohighlight.keywords` object and add the following code:

```json
"todohighlight.keywords": [
   { "text": "TOFIX:", "backgroundColor": "purple", "color": "White" },
    { "text": "BUG:", "backgroundColor": "teal", "color": "White" },
    { "text": "ISSUE:", "backgroundColor": "red", "color": "White" },
    { "text": "IDEA:", "backgroundColor": "blue", "color": "White" },
    { "text": "TEST:", "backgroundColor": "green", "color": "White" }
]
```

## Scripts

Scripts that are supported by this project use Pino for logging and not are:

- `npm run lint` : tests the server and it's dependancies for syntax and problems using ESLint
- `start` : Starts server with surface level `info` logs
- `dev` : Starts server with `debug` logs
- `debug` : Start server and watch for breakpoints
