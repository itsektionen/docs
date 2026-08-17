<!-- README has no frontmatter title. -->
<!--lint disable first-heading-level-->

# it/docs

<!--lint enable first-heading-level-->

[it/docs](https://docs.kth.it) is the documentation website for the IT-Chapter's systems and knowledge, built on [Fumadocs](https://www.fumadocs.dev/)!

If you want to know more, see [it/docs/introduction](https://docs.kth.it/docs).

## Development and building

Clone the repo and using a node package manager of your choice install the packages:

```bash
npm install
```

To run in dev mode use:

```bash
npm run dev
```

To build and see the static site:

```bash
npm run build && npm run serve
```

## Contributing

Contributions are welcome! If you want to add documentation see [Writing Documentation](https://docs.kth.it/docs/writing-documentation) for information on how to contribute.

Code contributions are discussed in the [**init** discord forum post for the docs](https://discord.com/channels/1437949827597209774/1470404086716305578), if you are not in the server, please contact [the **init** mainframe](https://init.kth.it).

VSCode is the recommended editor. When you open the repository, install the
recommended Prettier, ESLint, and MDX extensions. The workspace formats supported
files whenever you save them.

You can also format the repository manually:

```bash
npm run format:write
```

Before opening a pull request, run the same non-mutating checks as CI:

```bash
npm run check
```

Use `npm run lint` to run all linters or `npm run lint:links` to focus on broken
documentation links. CI reports problems but never rewrites contributor files.

If you are unsure about something, feel free to ask us!
