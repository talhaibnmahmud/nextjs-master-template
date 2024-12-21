import bundleAnalyzer from "@next/bundle-analyzer";
import type { NextConfig } from "next";

import "@/configs/env/client";
import "@/configs/env/server";

const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
  },
};

const isBundleAnalyzerEnabled = process.env.ANALYZE === "true";
const withBundleAnalyzer = bundleAnalyzer({
  enabled: isBundleAnalyzerEnabled,
});

export default isBundleAnalyzerEnabled ? withBundleAnalyzer(nextConfig) : nextConfig;
