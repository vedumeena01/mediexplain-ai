# MediExplain AI — Multimodal Health Report Simplifier 🩺🤖

MediExplain AI is an enterprise-grade multimodal clinical intelligence platform that transforms complex, jargon-heavy laboratory reports and diagnostic prescriptions into clear, accessible, bilingual (English & Hindi) clinical insights.

[![Next.js 16](https://img.shields.io/badge/Next.js-16%20(App%20Router)-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Gemini Vision](https://img.shields.io/badge/AI-Google%20Gemini%20Vision-8E75C2)](https://ai.google.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🌟 Key Engineering Highlights

- **31 Dynamic App Router Routes:** Complete clinical dashboard architecture with 100% strict TypeScript typing and zero production build errors.
- **Multimodal OCR & Parameter Extraction Pipeline:** Integrated Google Gemini Vision API with heuristic fallback logic to normalize 40+ clinical biomarkers across 4+ test categories (CBC, Lipid Panel, HbA1c/Glycemic index, Thyroid profile, Liver/Kidney function).
- **Bilingual Plain-Language Synthesis:** Converts medical terminology into plain English and Hindi with cardiovascular and metabolic risk gauges.
- **Sub-50ms CRUD Response:** Highly optimized state layer and serverless endpoints ensuring rapid report querying and interactive visualization.

---

## 🏗️ System Architecture

```
[User Report: PDF / JPG / PNG]
            │
            ▼
[Next.js 16 App Router API Route: /api/analyze]
            │
            ├─► 1. Preprocessing & Base64 Buffer Conversion
            ├─► 2. Google Gemini 1.5 Flash / Vision OCR Extraction
            ├─► 3. Clinical Parameter Schema Validation (Zod)
            └─► 4. Bilingual Translation & Risk Classification Engine
                        │
                        ▼
            [Interactive Patient Dashboard: Visual Gauges + Hindi/English Insights]
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/vedumeena01/mediexplain-ai.git
cd mediexplain-ai
npm install
npm run dev
```

---

## 👤 Author
- **Vedprakash Meena** ([@vedumeena01](https://github.com/vedumeena01)) — B.Tech IT, IIIT Sonepat
