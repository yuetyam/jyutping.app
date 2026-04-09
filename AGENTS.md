# AGENTS.md

This file provides guidance to AI agents working in this repository.

## Project Overview

This repository contains the static website for [jyutping.app](https://jyutping.app), the download and documentation hub for the Jyutping Cantonese input method across Android, iOS, macOS, Windows, HarmonyOS, and related distribution channels.

The site is built from plain HTML, CSS, images, and XML/JSON metadata files. There is no JavaScript application layer, no package manager setup, and no build step in this repository.

## Repository Structure

Top-level pages and sections are organized by platform or content area:

- `/` - main landing page
- `/android/`, `/ios/`, `/mac/`, `/windows/`, `/harmony/` - platform-specific pages
- `/fdroid/` - F-Droid-related page(s)
- `/faq/`, `/collection/`, `/donate/`, `/about/`, `/privacy/` - supporting content pages
- `/css/` - shared stylesheets
- `/images/` - screenshots, badges, QR codes, icons, and other assets
- `/appcast.xml` - Sparkle appcast for macOS updates
- `/sitemap.xml` - sitemap metadata
- `/manifest.json` - web app manifest

Each content directory typically contains its own `index.html` and uses relative links back to sibling sections.

## Content and Language

- The primary language is pure Cantonese with traditional Chinese characters.
- Many pages include short English labels or bilingual headings such as `下載 • Download`.
- HTML documents use `lang="yue"`. Preserve that unless a page is intentionally for another language.
- Keep the existing tone: concise, direct, and user-facing rather than promotional copywriting.

## Site Architecture

### Shared HTML patterns

- Navigation is embedded directly in each page instead of being generated from templates.
- Relative paths matter. Root pages use paths like `android` or `images/...`; nested pages use `../android` or `../images/...`.
- Pages usually include SEO and sharing metadata such as canonical URLs, Open Graph tags, Twitter card tags, theme colors, and icons.

### Shared CSS

The stylesheet layer is:

1. `css/base.css` - tokens, fonts, typography helpers, shared utility classes
2. `css/header.css` - fixed header and responsive navigation
3. `css/style.css` - page layout, screenshots, cards, responsive behavior, checksum toggle

`header.css` and `style.css` both import `base.css`, so preserve that structure when editing styles.

### JavaScript-free patterns

This site intentionally uses CSS-only interactions:

- responsive menu via checkbox toggle
- checksum reveal via checkbox toggle
- dark mode via `prefers-color-scheme`

Do not introduce JavaScript unless explicitly requested.

## Asset and Markup Conventions

- Dark-mode screenshots commonly use `<picture>` with a `source` element for `prefers-color-scheme: dark`.
- Social/share icons in metadata commonly use absolute URLs under `https://jyutping.app/images/`.
- Download links for release artifacts typically use `https://dl.jyutping.app/...`.
- Preserve existing class names and layout helpers where possible instead of inventing parallel patterns.

## Updating Release Information

When changing release downloads or versioned metadata, check for coordinated updates instead of editing a single page in isolation.

Common examples:

- platform page download link, version, compatibility text, file size, SHA-256, and release notes/date
- `sitemap.xml` last modified dates
- `appcast.xml` entries for macOS Sparkle releases

For macOS releases in particular, update the download section in `/mac/index.html` together with the corresponding `appcast.xml` enclosure and version metadata.

## Editing Guidance

- Prefer small, surgical edits. This repository is mostly hand-authored static content.
- Preserve existing whitespace style in HTML, CSS, XML, and JSON files.
- Keep navigation, metadata, and canonical links consistent when creating or moving pages.
- When editing one platform page, quickly check whether the same content pattern exists on sibling pages and should stay consistent.
- If you add or replace images, keep file naming aligned with the existing screenshot/badge conventions.

## Formatting Rules

From `.editorconfig`:

- UTF-8 encoding
- LF line endings
- 8-space indentation for `*.html`, `*.css`, `*.js`, and `*.xml`
- final newline required
- trim trailing whitespace

## Validation Expectations

Because the repository has no build, lint, or test tooling checked in, validate changes by checking:

- relative links and asset paths
- metadata consistency
- coordinated version/update files when release content changes
- indentation and formatting consistency with existing files
