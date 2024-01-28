# Luxe Hair Artistry Website

Website for Luxe Hair Artistry Co located in St Thomas, ON, Canada.

### Run Development Enviroment

To run the development server:

```console
   npm run dev
```

### Build and Publish to gh-pages

First update the package.json file with the new version number.

Then push changes to github with a commit message beginning with the version number:

```console
   git add *
   git commit -m "X.X.X: Commit Message"
   git push
```

Finally deploy the updated website:

```console
   npm run deploy
```

### Password to unprotect the Pricelist Excel Sheet

```console
   luxe_pricelist
```

## About

Built with React + TypeScript + Vite + Bootstrap
