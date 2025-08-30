#!/usr/bin/env node
import fetch from "node-fetch";

const res = await fetch("https://api.thecatapi.com/v1/images/search");
const data = await res.json();
console.log("🐱 Random Cat:", data[0].url);
