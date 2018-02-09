# from django.shortcuts import render
from django.http import HttpResponse
#from redis import Redis

#redis = Redis(host='redis', port=6379)


def index(request):
  count = 1#redis.incr('counter')
  msg = 'howdy for the {}th time!'.format(count)
  return HttpResponse(msg)
