# PRO QUANT ANALYTICS

Professional financial research platform — Quant Research (Python/SQL/R driven), premium dark theme, subscriber vs non-subscriber views.

## Stack

- **Next.js 14** (App Router), **TypeScript**, **Tailwind CSS**
- **Plotly.js** (interactive charts), **Framer Motion**, **cmdk** (Command Palette)
- **Backend**: Python script (Pandas) for moving averages; Next.js API route for chart data

## Setup

1. **Install dependencies**

   ```bash
   cd pro-quant-analytics
   npm install
   ```

2. **Run dev server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

3. **Optional — Python data pipeline**

   - Install Python 3 and optionally: `pip install -r backend/scripts/requirements.txt`
   - Place a CSV with `date` and `close` in `backend/scripts/` or use `sample_prices.csv`
   - API `/api/data` will use the script output when the script and CSV exist; otherwise it returns sample data

## Features

- **Landing**: Hero, Quant Research copy, Standard/Pro pricing, Dashboard CTA
- **Dashboard**: Sidebar (Overview, Reports, Analytics, Settings); main area with LiveChart
- **Subscriber state**: Cookie `proquant_subscriber=standard` or `pro` (e.g. visit `/dashboard?subscribe=pro`)
  - **Non-subscriber**: Locked chart (blurred) + “Upgrade to Pro” CTA
  - **Subscriber**: Full Plotly chart; **Pro** also gets PDF report section and support chat widget
- **Command Palette**: `Ctrl+K` (or `Cmd+K`) to search financial reports and navigate
- **API**: `GET /api/data` returns `{ x: string[], y: number[] }` for charts (Python or fallback)

## Theme

- Premium dark: Slate-950 background, Emerald-500 accents
- Typography: Inter (UI), JetBrains Mono (data/code)
