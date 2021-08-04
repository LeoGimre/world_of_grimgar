from django.urls import path
from .views import HeroListCreate, HeroListSingular, LoreFromGroup, LoreFromUndergroup, LoreGroupListCreate, LoreItemList, LoreListCreate, LoreListSingular, LoreLogsList, LorePeopleList, LoreRulesList, LoreUndergroupListCreate, LoreTypeListCreate, LoreKnowledgeList, QuoteListCreate, UndergroupFromGroup

urlpatterns = [
    
    path("lore/group/<int:group>", LoreFromGroup.as_view(), name="lore_group_special"),

    path("lore/group/undergroup/<int:group>", UndergroupFromGroup.as_view(), name="lore_group_special"),
    path("lore/undergroup/<int:undergroup>", LoreFromUndergroup.as_view(), name="lore_group_special"),
    
    path("lore/<int:pk>", LoreListSingular.as_view(), name="lore_single"),
    path("hero/<int:pk>", HeroListSingular.as_view(), name="hero_single"),


    path("hero/", HeroListCreate.as_view(), name="hero"),
    path("lore/", LoreListCreate.as_view(), name="lore"),
    path("loretype/", LoreTypeListCreate.as_view(), name="loretype"),
    path("lore/group/", LoreGroupListCreate.as_view(), name="loregroup"),
    path("lore/undergroup/", LoreUndergroupListCreate.as_view(), name="loreundergroup"),

    path("lore/knowledge", LoreKnowledgeList.as_view(), name="lore_knowledge"),
    path("lore/people", LorePeopleList.as_view(), name="lore_people"),
    path("lore/item", LoreItemList.as_view(), name="lore_item"),
    path("lore/rule", LoreRulesList.as_view(), name="lore_player"),
    path("lore/log", LoreLogsList.as_view(), name="lore_rule"),
    path("quote/", QuoteListCreate.as_view(), name="quote_create"),

]
