import os

def find_markdown_files(directory="."):
    """
    Finds all markdown files recursively in the given directory and returns a list of their relative paths.

    Args:
        directory (str): The directory to search in. Defaults to the current working directory.

    Returns:
        list: A list of relative paths to markdown files.
    """
    markdown_files = []
    for root, _, files in os.walk(directory):
        for file in files:
            if file.lower().endswith((".md", ".markdown")):
                relative_path = os.path.relpath(os.path.join(root, file), directory)
                relative_path=relative_path.replace("\\", "/")
                markdown_files.append(relative_path[:-3] if relative_path.endswith(".md") else relative_path[:-9])
    return markdown_files

def gen_wikilist():
    with open("wikilist.js","w",encoding="utf-8") as f:
        f.write('''
/**
 * This file contains all the wiki pages that are available in the wiki.
 * 
 * We encourage you to generate this file dynamically via the wiki_tools.py script.
 */
const wikiList = [
%s
]
'''%(",\n".join(list(map(lambda x: '    "%s"'%x, find_markdown_files())))))


gen_wikilist()
print("Generated wikilist.js")