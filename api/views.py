from typing import Counter
from django import urls
from django.conf.urls import url
from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .serializers import HeroSerializer, LoreSerializer, LoreTypeSerializer, LoreUndergroupSerializer, LoreGroupSerializer, QuoteSerializer
from .models import Lore, LoreGroup, LoreType, Hero, LoreUndergroup, Quote


class HeroListCreate(generics.ListCreateAPIView):
    queryset = Hero.objects.all()
    serializer_class = HeroSerializer

class LoreListCreate(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticatedOrReadOnly]
    queryset = Lore.objects.all()
    serializer_class = LoreSerializer

class LoreTypeListCreate(generics.ListCreateAPIView):
    queryset = LoreType.objects.all()
    serializer_class = LoreTypeSerializer


class LoreGroupListCreate(generics.ListCreateAPIView):
    queryset = LoreGroup.objects.all()
    serializer_class = LoreGroupSerializer


class LoreUndergroupListCreate(generics.ListCreateAPIView):
    queryset = LoreUndergroup.objects.all()
    serializer_class = LoreUndergroupSerializer

class LoreListSingular(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lore.objects.all()
    serializer_class = LoreSerializer

class HeroListSingular(generics.RetrieveUpdateDestroyAPIView):
    queryset = Hero.objects.all()
    serializer_class = HeroSerializer


class LoreKnowledgeList(generics.ListAPIView):
    serializer_class = LoreGroupSerializer
    queryset = LoreGroup.objects.all()

    def get_queryset(self):
        loretype = "1"
        return LoreGroup.objects.filter(type=loretype)

class LoreItemList(generics.ListAPIView):
    serializer_class = LoreGroupSerializer
    queryset = LoreGroup.objects.all()

    def get_queryset(self):
        loretype = "3"
        return LoreGroup.objects.filter(type=loretype)


class LorePeopleList(generics.ListAPIView):
    serializer_class = LoreGroupSerializer
    queryset = LoreGroup.objects.all()

    def get_queryset(self):
        loretype = "2"
        return LoreGroup.objects.filter(type=loretype)
        
class LoreRulesList(generics.ListAPIView):
    serializer_class = LoreGroupSerializer
    queryset = LoreGroup.objects.all()

    def get_queryset(self):
        loretype = "4"
        return LoreGroup.objects.filter(type=loretype)


class LoreLogsList(generics.ListAPIView):
    serializer_class = LoreGroupSerializer
    queryset = LoreGroup.objects.all()

    def get_queryset(self):
        loretype = "5"
        return LoreGroup.objects.filter(type=loretype)
    


class LoreFromGroup(generics.ListAPIView):
    serializer_class = LoreSerializer
    queryset = Lore.objects.all()
    
    def get_queryset(self):
        return Lore.objects.filter(group = self.kwargs['group'])
    

class UndergroupFromGroup(generics.ListAPIView):
    serializer_class = LoreUndergroupSerializer
    queryset = LoreUndergroup.objects.all()
    
    def get_queryset(self):
        return LoreUndergroup.objects.filter(group = self.kwargs['group'])

class LoreFromUndergroup(generics.ListAPIView):
    serializer_class = LoreSerializer
    queryset = Lore.objects.all()
    
    def get_queryset(self):
        return Lore.objects.filter(undergroup = self.kwargs['undergroup'])
    
class QuoteListCreate(generics.ListCreateAPIView):
    queryset = Quote.objects.all()
    serializer_class = QuoteSerializer
