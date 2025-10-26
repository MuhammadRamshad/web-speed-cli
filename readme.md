# Web Speed CLI

A small Node.js CLI to measure basic HTTP response time for one or more websites.

- Main script: [webspeed.js](webspeed.js) (contains the [`ping`](webspeed.js) function)
- Alternative duplicate file: [webSpeed.js](webSpeed.js)
- Package metadata / bin entry: [package.json](package.json)

## Installation

Install globally via npm:

```sh
npm install -g webspeed
```
Clone the repo and install (or link) locally:

```sh
git clone https://github.com/MuhammadRamshad/web-speed-cli.git
cd web-speed-cli
npm install
# make the `webspeed` command available globally for testing
npm link
```

Or run directly with Node:

```sh
node webspeed.js example.com
```

When installed via npm link or published as a package, run:

```sh
webspeed example.com google.com
```

## Usage

The CLI accepts one or more websites as arguments:

```sh
# Test multiple websites
webspeed google.com facebook.com

# Or run directly via Node
node webspeed.js https://example.com

# Or use npx without installing globally
npx webspeed google.com
```

Example output:

- "Testing connection to example.com"
- "Connected to example.com"
- "Response status: 200"
- "Response time: 150ms"

## How it works

The CLI measures elapsed time between issuing an HTTP GET and receiving the response using the [`ping`](webspeed.js) function in [webspeed.js](webspeed.js). It uses Node's built-in `http` module and a 3000ms timeout per request.

## Notes

- The script currently forces `http://` in requests. For HTTPS sites, either pass a hostname that supports HTTP or extend the script to support HTTPS.
- The project uses the `webspeed` bin defined in [package.json](package.json).

## License

MIT
