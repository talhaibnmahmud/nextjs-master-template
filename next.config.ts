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

export default nextConfig;
