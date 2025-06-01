# Tauri + Modern.js Template

A production-ready template for building cross-platform desktop applications using [Tauri](https://tauri.app/) with [Modern.js](https://modernjs.dev/) and React.

## Features

- **Cross-Platform**: Build for Windows, macOS (Intel & Apple Silicon), and Linux
- **Modern Frontend**: React 19 with Modern.js framework
- **Fast Bundling**: Rspack for lightning-fast builds
- **Type Safety**: Full TypeScript support
- **Styling**: LESS with CSS modules disabled for flexibility
- **State Management**: Zustand for lightweight state management
- **Icons**: Lucide React for beautiful icons
- **CI/CD**: GitHub Actions workflow for automated builds
- **Optimized Builds**: Production-ready with code splitting and LTO

## Tech Stack

### Frontend
- **Framework**: Modern.js v2.67.7
- **UI Library**: React 19
- **Bundler**: Rspack (configurable to Webpack)
- **Styling**: LESS
- **State Management**: Zustand
- **Icons**: Lucide React
- **Date Handling**: Day.js

### Backend
- **Runtime**: Tauri v2
- **Language**: Rust
- **Build Tool**: Cargo

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or later)
- **Bun** (latest version)
- **Rust** (latest stable)
- **System Dependencies**:
  - **Linux**: `sudo apt-get install libwebkit2gtk-4.1-dev libappindicator3-dev librsvg2-dev patchelf`
  - **macOS**: Xcode Command Line Tools
  - **Windows**: Microsoft C++ Build Tools

## Getting Started

### 1. Clone the Template

```bash
git clone https://github.com/gedankrayze/tauri-modernjs
cd tauri-modernjs
```

### 2. Install Dependencies

```bash
# Install frontend dependencies
bun install

# Install Rust dependencies (handled automatically by Tauri)
```

### 3. Development

```bash
# Start development server
bun run tauri:dev
```

This will:
- Start the Modern.js dev server on `http://localhost:8080`
- Launch the Tauri application in development mode
- Enable hot reloading for both frontend and backend changes

### 4. Build for Production

```bash
# Build the application
bun run tauri:build
```

## Available Scripts

- `bun run dev` - Start Modern.js development server only
- `bun run build` - Build frontend for production
- `bun run tauri:dev` - Start Tauri development mode
- `bun run tauri:build` - Build Tauri application for production

## Project Structure

```
tauri-modernjs/
├── .github/
│   └── workflows/
│       └── build.yml          # GitHub Actions CI/CD
├── public/
│   └── tauri.svg             # Static assets
├── src/
│   ├── routes/
│   │   └── layout.tsx        # Main layout component
│   ├── global.d.ts           # Global TypeScript declarations
│   ├── global.less           # Global styles
│   └── modern-app-env.d.ts   # Modern.js environment types
├── src-tauri/
│   ├── src/
│   │   ├── lib.rs            # Main Tauri library
│   │   └── main.rs           # Application entry point
│   ├── icons/                # Application icons
│   ├── Cargo.toml            # Rust dependencies
│   └── tauri.conf.json       # Tauri configuration
├── modern.config.ts          # Modern.js configuration
├── package.json              # Node.js dependencies
└── tsconfig.json             # TypeScript configuration
```

## Configuration

### Modern.js Configuration

The `modern.config.ts` file contains:
- **Bundler**: Rspack (faster) or Webpack
- **Router**: Enabled for SPA routing
- **Global Variables**: APP_NAME available in components
- **Performance**: Optimized chunk splitting
- **LESS**: Configured with JavaScript support

### Tauri Configuration

The `src-tauri/tauri.conf.json` file contains:
- **Window Settings**: 800x600 default size
- **Build Commands**: Integration with Modern.js
- **Security**: CSP disabled for development
- **Bundle Settings**: Multi-platform support

### Build Optimizations

#### Frontend (Modern.js)
- Chunk splitting with `split-by-experience` strategy
- Vendor chunk separation
- LESS compilation optimizations

#### Backend (Rust)
- Link Time Optimization (LTO)
- Single codegen unit for smaller binaries
- Panic abort for release builds
- Binary stripping for reduced size

## GitHub Actions CI/CD

The included workflow (`.github/workflows/build.yml`) provides:

### Triggers
- Push to `main` branch
- Pull requests to `main`
- Release creation

### Build Matrix
- **Linux**: Ubuntu latest (x86_64)
- **Windows**: Windows latest (x86_64)
- **macOS Intel**: macOS latest (x86_64)
- **macOS Apple Silicon**: macOS latest (aarch64)

### Artifacts
- **Windows**: `.msi` and `.exe` installers
- **Linux**: `.deb` packages and `.AppImage` binaries
- **macOS**: `.dmg` disk images and `.app` bundles

### Release Process
1. Create a release on GitHub
2. Workflow automatically builds for all platforms
3. Compressed artifacts are attached to the release

## Customizing the Template

### 1. Update Branding

Edit the following files:
- `package.json`: Update name, description, version
- `src-tauri/Cargo.toml`: Update package name
- `src-tauri/tauri.conf.json`: Update productName, identifier, window title
- `modern.config.ts`: Update APP_NAME global variable

### 2. Add Tauri Commands

1. Define commands in `src-tauri/src/lib.rs`:
```rust
#[tauri::command]
fn my_command(param: String) -> String {
    format!("Hello, {}!", param)
}
```

2. Register in the handler:
```rust
.invoke_handler(tauri::generate_handler![greet, my_command])
```

3. Use in frontend:
```typescript
import { invoke } from '@tauri-apps/api/core';

const result = await invoke('my_command', { param: 'World' });
```

### 3. Add New Dependencies

Frontend:
```bash
bun add <package-name>
bun add -d <dev-package-name>
```

Backend:
```bash
cd src-tauri
cargo add <crate-name>
```

## Troubleshooting

### Common Issues

1. **Build fails on Linux**: Ensure WebKit dependencies are installed
2. **Rust compilation errors**: Update Rust to latest stable version
3. **Frontend not loading**: Check if dev server is running on port 8080

### Development Tips

- Use `bun run tauri:dev` for development with hot reloading
- Check Tauri logs in the terminal for backend debugging
- Use browser DevTools for frontend debugging
- Monitor bundle size with the performance configuration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on multiple platforms
5. Submit a pull request

## License

This template is provided as-is for educational and commercial use.

## Resources

- [Tauri Documentation](https://tauri.app/develop/)
- [Modern.js Documentation](https://modernjs.dev/en/)
- [React Documentation](https://react.dev/)
- [Rust Documentation](https://doc.rust-lang.org/)