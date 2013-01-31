This contains all the code snippets/samples/guides used on ariatemplates.com documentation.
The usermanual is composed of markdown files in which you have the ability to display some code snippets (`/snippets`),
or insert some live samples (`/samples`).

Guides are specials and treated separately.

How to use some code into your markdown files
---------------------------------------------

### Snippets

To insert a snippet in your markdown file you just need to write a script tag.

    <script src='http://snippets.ariatemplates.com/snippets/github.com/ariatemplates/documentation-code/snippets/core/beans/SimpleBean.js'></script>

Several options could be specified directly through the given url to adjust the code:

* `lang` to specify the language to be used by the highlighting library.
* `outdent` to specify a number of character to remove at the beginning of each line to outdent the code.
* `tag` to specify a tag name to be used to extract only a piece of code from the source.

This example will embed the file `snippets/core/beans/SimpleBean.js` located in the repository `ariatemplates/documentation-code` hosted on `github.com`.


### Samples

To insert a sample in your markdown file you just need to embed it in a iframe.

    <iframe class='samples' src='http://snippets.ariatemplates.com/samples/github.com/ariatemplates/documentation-code/samples/templates/templateScripts/clickhandler/'></iframe>

How to create a new snippet/sample or update an existing one
------------------------------------------------------------

### Creating a new snippet

First thing is to check that there is not any existing snippet corresponding to the one you are about to create.

If not, just create the new file in the correct location (in the `/snippets` folder) trying to match at most the category of your new piece of code (core, advanced...).

Once your new file is created, simply include it in your markdown file using the same script inclusion syntax that the one described above.

### Creating a new sample

To create a new sample, you'll have to create a bunch of new files. A sample is composed of several source files and a desciptor file.

First create a new folder in the proper location that suits your needs. Your folder has to be located under the `/samples` folder.

Then create the desciptor file:

    $ touch sample.yaml

Describe your sample:

```yaml
title: Automatic Refresh
template: samples.templates.refresh.automatic.AutomaticRefresh
description: It shows how the Automatic Refresh works in aria templates.
sources:
- AutomaticRefresh.tpl
- AutomaticRefreshScript.js
- RefreshCSS.tpl.css
data:
  teams:
  - name: 'England'
    score: 0
  - name: 'France'
    score: 0
```

Push the code! You're done, you can use it in your markdown file using the same iframe inclusion syntax that the one described [above](#samples).


### Updating an existing one

Let's suppose you want to update a snippet because of a change in the api. Because we are maintaining several different versions of the documentation /!\ don't edit the original one !! /!\ .

Instead just create a new version of this snippets, in the same location with a new name (the simplest new name is to use the same one with a `_1` suffix.

`snippets/core/beans/SimpleBean.js` => `snippets/core/beans/SimpleBean_1.js`

Finally simply reference the new version of the snippet in your markdown file using the same script inclusion syntax that the one described [above](#snippets).
