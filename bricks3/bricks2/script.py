import sys
from os.path import exists
from glob import glob

import magic

ratio = 1.5

d = {}

if len(sys.argv) > 1:
    path = sys.argv[1]
else:
    path = "."

files = glob(path + '/**/*.png', recursive=True)

# l = listdir(path)
#
# for f in l:
#     fp = join(path, f)
#     if isdir(fp):
#         ll = listdir(fp)
#         for ff in ll:
#             ffp = join(fp, ff)
#             if isfile(ffp) and ffp.endswith(".png"):
#                 if "-PD" in ffp:
#                     ffpgen = ffp.replace("-PD", "-")
#                     ffppd = ffp
#                     ffpaf = ffp.replace("-PD", "-AF")
#                     if not exists(ffpaf):
#                         ffpaf = None
#                     ffper = ffp.replace("-PD", "-ER")
#                     if not exists(ffper):
#                         ffper = None
#                 elif "-AF" in ffp:
#                     ffpgen = ffp.replace("-AF", "-")
#                     ffpaf = ffp
#                     ffppd = ffp.replace("-AF", "-PD")
#                     if not exists(ffppd):
#                         ffppd = None
#                     ffper = ffp.replace("-AF", "-ER")
#                     if not exists(ffper):
#                         ffper = None
#                 elif "-ER" in ffp:
#                     ffpgen = ffp.replace("-ER", "-")
#                     ffper = ffp
#                     ffppd = ffp.replace("-ER", "-PD")
#                     if not exists(ffppd):
#                         ffppd = None
#                     ffpaf = ffp.replace("-ER", "-AF")
#                     if not exists(ffpaf):
#                         ffpaf = None
#                 d[ffpgen] = [ffppd, ffpaf, ffper]

for ffp in files:
    if "-PD" in ffp:
        ffpgen = ffp.replace("-PD", "-")
        ffppd = ffp
        ffpaf = ffp.replace("-PD", "-AF")
        if not exists(ffpaf):
            ffpaf = None
        ffper = ffp.replace("-PD", "-ER")
        if not exists(ffper):
            ffper = None
    elif "-AF" in ffp:
        ffpgen = ffp.replace("-AF", "-")
        ffpaf = ffp
        ffppd = ffp.replace("-AF", "-PD")
        if not exists(ffppd):
            ffppd = None
        ffper = ffp.replace("-AF", "-ER")
        if not exists(ffper):
            ffper = None
    elif "-ER" in ffp:
        ffpgen = ffp.replace("-ER", "-")
        ffper = ffp
        ffppd = ffp.replace("-ER", "-PD")
        if not exists(ffppd):
            ffppd = None
        ffpaf = ffp.replace("-ER", "-AF")
        if not exists(ffpaf):
            ffpaf = None
    d[ffpgen] = [ffppd, ffpaf, ffper]

for ffpgen in d:
    ffppd = d[ffpgen][0]
    ffpaf = d[ffpgen][1]
    ffper = d[ffpgen][2]
    if ffppd:
        # ffppdw = round(int(magic.from_file(ffppd).split(", ")[1].split(" ")[0])/ratio)
        ffppdw = round(int(magic.from_file(ffppd).split(", ")[1].split(" ")[0])/ratio)
        ffppdim = '<img src="../bricks2/{}" width="{}px"/>'.format(ffppd.lstrip("."), ffppdw)
        ffppddown = '<a href="/bricks2/{0}"><img src="../images/sbgnml_logo.png" width="60"/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="/bricks2/{0}"><img src="../images/newt_logo.png" width="50"/></a>'.format(ffppd.lstrip("."))
    else:
        ffppdim = "Not applicable"
        ffppdw = 100
        ffppddown = ''
    if ffpaf:
        ffpafw = round(int(magic.from_file(ffpaf).split(", ")[1].split(" ")[0])/ratio)
        ffpafim = '<img src="../bricks2/{}" width="{}px"/>'.format(ffpaf.lstrip("."), ffpafw)
        ffpafdown = '<a href="/bricks2/{0}"><img src="../images/sbgnml_logo.png" width="60"/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="/bricks2/{0}"><img src="../images/newt_logo.png" width="50"/></a>'.format(ffpaf.lstrip("."))
    else:
        ffpafim = "Not applicable"
        ffpafw = 100
        ffpafdown = ''
    if ffper:
        ffperw = round(int(magic.from_file(ffper).split(", ")[1].split(" ")[0])/ratio)
        ffperim = '<img src="../bricks2/{}" width="{}px"/>'.format(ffper.lstrip("."), ffperw)
        ffperdown = '<a href="/bricks2/{0}"><img src="../images/sbgnml_logo.png" width="60"/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="/bricks2/{0}"><img src="../images/newt_logo.png" width="50"/></a>'.format(ffper.lstrip("."))
    else:
        ffperim = "Not applicable"
        ffperw = 100
        ffperdown = ''

    s = '<table class="dic">\n'
    s += '  <tr>\n'
    s += '      <td class="pd" style="width:{}">{}</td>\n'.format("32%", ffppdim)
    s += '      <td class="af" style="width:{}">{}</td>\n'.format("32%", ffpafim)
    s += '      <td class="er" style="width:{}">{}</td>\n'.format("32%", ffperim)
    s += '  </tr>\n'
    s += '  <tr>\n'
    s += '      <td>{}</td>\n'.format(ffppddown)
    s += '      <td>{}</td>\n'.format(ffpafdown)
    s += '      <td>{}</td>\n'.format(ffperdown)
    s += '  </tr>\n'
    s += '</table>\n'
    print(s)
