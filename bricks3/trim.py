from os import listdir
from os.path import isfile, isdir, join, exists
from subprocess import call

import magic

ratio = 2.1

d = {}

path = "."

l = listdir(path)

for f in l:
    fp = join(path, f)
    if isdir(fp):
        ll = listdir(fp)
        for ff in ll:
            ffp = join(fp, ff)
            if isfile(ffp) and ffp.endswith(".png"):
                print(ffp)
                call(["convert", ffp, "-trim", ffp])
