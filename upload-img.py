import requests
import json
from datetime import datetime
import re
import argparse
import sys

parser = argparse.ArgumentParser(
    description='Transfer all images\' url in MDX/MD')
parser.add_argument('-f', '--file', type=str, help='File Path')

args = parser.parse_args()

if not args.file:
    print('missing input')
    sys.exit(-1)

if not args.file.endswith('.mdx') and not args.file.endswith('.md'):
    print('please give mdx or md file !')
    sys.exit(-1)

with open(args.file, 'r+', encoding="utf-8") as f:
    file_contents = f.readlines()
    f.seek(0)
    for line in file_contents:
        match_obj = re.match('.*!\[\]\((.*)\).*', line)
        if match_obj:
            origin_img = match_obj.group(1)
            if 'thumbsnap.com' in origin_img:
                f.write(line)
                continue
            to_path = 'C:\\Users\\Administrator\\Pictures\\temp'
            flag = False
            try:
                res = requests.get(origin_img)
                file = open(to_path, 'wb')
                file.write(res.content)
                flag = True
                print('download {} into {} successful'.format(
                    origin_img, to_path))
            except Exception as e:
                print('catch error: {}'.format(e))
            finally:
                if file:
                    file.close()
            if not flag:
                print('fail download img for {}'.format(origin_img))
                continue
            multipart_form_data = {
                'media': ('tmp.jpeg', open(to_path,
                                           'rb'), "multipart/form-data"),
                'key': (None, '0000144a8b7364c22ebbee9c713c64a8')
            }
            res = requests.post('https://thumbsnap.com/api/upload',
                                files=multipart_form_data)
            if res.status_code != 200:
                print('fail upload img for {}'.format(origin_img))
                continue
            img_js = json.loads(res.content.decode('utf8'))
            img_url = img_js['data']['media']

            # append date into url in order to fetch img only
            today = datetime.today()
            suffix = '{:0>2d}{:0>2d}'.format(today.month, today.day)
            final_img_url = '{}?{}'.format(img_url, suffix)
            new_line = line.replace(origin_img, final_img_url)
            print('origin line:', line)
            print('new line:', new_line)
            f.write(new_line)
        else:
            f.write(line)
    f.truncate()
    print('upload imgs for {} done!'.format(args.file))