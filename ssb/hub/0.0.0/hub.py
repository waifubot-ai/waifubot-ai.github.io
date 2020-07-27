import urllib.request as ur
import datetime as dt

versions = ur.urlopen('https://skanerooo.github.io/ssb/verlog/vers.json')
versions = versions.read()
versions = versions.decode()
versions = eval(versions)

apps = {}

with open('./ver.json', 'r+') as test:
	local = test.read()
	local = eval(local)



for app in versions.keys():
	if app in local.keys():
		if list(versions[app].keys())[-1] == local[app]:
			apps[app] = 2
		else:
			apps[app] = 1
	else:
		apps[app] = 0

for item in apps.keys():
	if apps[item] == 2:
		print('{}:\t Up to date'.format(item))
	elif apps[item] == 1:
		print('{}:\t Update required\t\tDownloading {}'.format(item, list(versions[item].values())[-1]))
	elif apps[item] == 0:
		print('{}:\t Not downloaded'.format(item))


