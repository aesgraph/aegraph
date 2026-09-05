![V0 Progress](https://img.shields.io/github/milestones/progress/aesgraph/aegraph/1?label=V0%3A%20full%20product%20demo&color=blue)
[![codecov](https://codecov.io/gh/aesgraph/aegraph/branch/main/graph/badge.svg)](https://codecov.io/gh/aesgraph/aegraph)
![Discord](https://img.shields.io/discord/1347095524737679380?color=9cf)
[![Build](https://github.com/aesgraph/aegraph/actions/workflows/build.yml/badge.svg)](https://github.com/aesgraph/aegraph/actions)

# Aegraph

Aegraph is a human-centric graph model engine, application library, and information exchange platform.

Aegraph is a general solution for web-based client-side interaction with Graphs. It aims to serve as a framework through which various independently developed graph-based applications can interoperate.

Aegraph provides first-class mechanisms for managing display scenes independently from the underlying graph
model, allowing for highly flexible and interactive representations of complex structured data.

Aegraph is derived from [unigraph](https://github.com/aesgraph/unigraph).

### [Live Demo](https://unigraph.vercel.app/) (upstream unigraph deployment) <br>

#### [Notes and documentation](https://aesgraph.github.io/aegraph/)

#

### Getting started

<ins>Running the app locally</ins><br>

1. `git clone https://github.com/aesgraph/aegraph.git`
2. `cd aegraph`
3. `npm install`<br>
4. `npm start`<br>
5. Open http://localhost:3000/

<ins>Documentation: Serving Locally</ins><br>
_For developing and previewing documentation locally_<br>

1. `brew install ruby`
2. `gem install jekyll bundler`
3. `cd docs`
4. `bundle install`
5. `bundle exec jekyll serve --livereload`
6. Go to http://localhost:4000/
