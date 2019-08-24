---
inject: true
to: src/css/blocks.css
skip_if: <%= name %>
after: /* Generated blocks */
---
@import '../blocks/<%= name %>/<%= name %>.css';
