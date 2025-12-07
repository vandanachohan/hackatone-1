## GitHub Copilot Chat

- Extension: 0.33.3 (prod)
- VS Code: 1.106.3 (bf9252a2fb45be6893dd8870c0bf37e2e1766d61)
- OS: win32 10.0.19044 x64
- GitHub Account: vandanachohan

## Network

User Settings:
```json
  "github.copilot.advanced.debug.useElectronFetcher": true,
  "github.copilot.advanced.debug.useNodeFetcher": false,
  "github.copilot.advanced.debug.useNodeFetchFetcher": true
```

Connecting to https://api.github.com:
- DNS ipv4 Lookup: 20.207.73.85 (11 ms)
- DNS ipv6 Lookup: Error (29 ms): getaddrinfo ENOTFOUND api.github.com
- Proxy URL: None (10 ms)
- Electron fetch (configured): HTTP 200 (199 ms)
- Node.js https: HTTP 200 (324 ms)
- Node.js fetch: HTTP 200 (366 ms)

Connecting to https://api.individual.githubcopilot.com/_ping:
- DNS ipv4 Lookup: 140.82.112.21 (6 ms)
- DNS ipv6 Lookup: Error (12 ms): getaddrinfo ENOTFOUND api.individual.githubcopilot.com
- Proxy URL: None (3 ms)
- Electron fetch (configured): HTTP 200 (702 ms)
- Node.js https: HTTP 200 (719 ms)
- Node.js fetch: HTTP 200 (686 ms)

Connecting to https://proxy.individual.githubcopilot.com/_ping:
- DNS ipv4 Lookup: 138.91.182.224 (13 ms)
- DNS ipv6 Lookup: Error (32 ms): getaddrinfo ENOTFOUND proxy.individual.githubcopilot.com
- Proxy URL: None (7 ms)
- Electron fetch (configured): HTTP 200 (858 ms)
- Node.js https: HTTP 200 (877 ms)
- Node.js fetch: HTTP 200 (977 ms)

Connecting to https://github.com: HTTP 200 (308 ms)
Connecting to https://telemetry.individual.githubcopilot.com/_ping: HTTP 200 (727 ms)

Number of system certificates: 23

## Documentation

In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).