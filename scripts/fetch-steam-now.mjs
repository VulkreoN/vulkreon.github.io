#!/usr/bin/env node
// Fetches the most recently played Steam game and writes now-playing.json,
// which the portfolio's hub "NOW" card reads client-side.
// Runs server-side (GitHub Actions) so the Steam API key never reaches the browser.

const API_KEY = process.env.STEAM_API_KEY;
const VANITY = process.env.STEAM_VANITY || "vulkreon";

if (!API_KEY) {
  console.error("Missing STEAM_API_KEY env var");
  process.exit(1);
}

async function resolveSteamId(vanity) {
  const url = `https://api.steampowered.com/ISteamUser/ResolveVanityURL/v1/?key=${API_KEY}&vanityurl=${encodeURIComponent(vanity)}`;
  const res = await fetch(url);
  const data = await res.json();
  if (data?.response?.success !== 1) {
    throw new Error(`Could not resolve vanity URL "${vanity}": ${data?.response?.message || "unknown error"}`);
  }
  return data.response.steamid;
}

async function getMostRecentGame(steamid) {
  const url = `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=${API_KEY}&steamid=${steamid}&count=1`;
  const res = await fetch(url);
  const data = await res.json();
  const game = data?.response?.games?.[0];
  return game ? game.name : null;
}

const steamid = await resolveSteamId(VANITY);
const game = await getMostRecentGame(steamid);

const fs = await import("node:fs/promises");
await fs.writeFile(
  "now-playing.json",
  JSON.stringify({ game: game || null, updatedAt: new Date().toISOString() }, null, 2) + "\n"
);

console.log("now-playing.json ->", game || "(no recent game / private profile)");
