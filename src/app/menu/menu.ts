
import { CoreMenu } from '@core/types'

export const menu: CoreMenu[] = [
  {
    id: "home",
    title: "Home",
    translate: "MENU.HOME",
    type: "item",
    icon: "home",
    url: "home",
  },
  //Member
  {
    id: "member",
    title: "Member",
    translate: "MENU.APPS.MEMBER.COLLAPSIBLE",
    type: "collapsible",
    icon: "user",
    children: [
      {
        id: "list",
        title: "List",
        translate: "MENU.APPS.MEMBER.LIST",
        type: "item",
        icon: "circle",
        url: "apps/user/user-list",
      },
      {
        id: "edit",
        title: "Edit",
        translate: "MENU.APPS.MEMBER.EDIT",
        type: "item",
        icon: "circle",
        url: "apps/user/user-edit",
      },
    ],
  },
  // Level
  {
    id: "levels",
    title: "Level",
    translate: "MENU.APPS.LEVEL.COLLAPSIBLE",
    type: "collapsible",
    icon: "bar-chart-2",
    children: [
      {
        id: "list",
        title: "List",
        translate: "MENU.APPS.LEVEL.LIST",
        type: "item",
        icon: "circle",
        url: "level/list",
      },
      {
        id: "add",
        title: "Add",
        translate: "MENU.APPS.LEVEL.ADD",
        type: "item",
        icon: "circle",
        url: "level/add",
      }
    ],
  },
  // fish
  {
    id: "fish",
    title: "Fish",
    translate: "MENU.APPS.FISH.COLLAPSIBLE",
    type: "collapsible",
    icon: "codesandbox",
    children: [
      {
        id: "list",
        title: "List",
        translate: "MENU.APPS.FISH.LIST",
        type: "item",
        icon: "circle",
        url: "apps/user/user-list",
      },
      {
        id: "edit",
        title: "Edit",
        translate: "MENU.APPS.FISH.EDIT",
        type: "item",
        icon: "circle",
        url: "apps/user/user-edit",
      },
    ],
  },
  // Competition
  {
    id: "competition",
    title: "Competition",
    translate: "MENU.APPS.COMPETITION.COLLAPSIBLE",
    type: "collapsible",
    icon: "anchor",
    children: [
      {
        id: "list",
        title: "List",
        translate: "MENU.APPS.COMPETITION.LIST",
        type: "item",
        icon: "circle",
        url: "apps/user/user-list",
      },
      {
        id: "edit",
        title: "Edit",
        translate: "MENU.APPS.COMPETITION.EDIT",
        type: "item",
        icon: "circle",
        url: "apps/user/user-edit",
      },
    ],
  },
  // Hunting
  {
    id: "hunting",
    title: "Hunting",
    translate: "MENU.APPS.HUNTING.COLLAPSIBLE",
    type: "collapsible",
    icon: "crosshair",
    children: [
      {
        id: "list",
        title: "List",
        translate: "MENU.APPS.HUNTING.LIST",
        type: "item",
        icon: "circle",
        url: "apps/user/user-list",
      },
      {
        id: "edit",
        title: "Edit",
        translate: "MENU.APPS.HUNTING.EDIT",
        type: "item",
        icon: "circle",
        url: "apps/user/user-edit",
      },
    ],
  },
  // Ranking
  {
    id: "ranking",
    title: "Ranking",
    translate: "MENU.APPS.RANKING.COLLAPSIBLE",
    type: "collapsible",
    icon: "award",
    children: [
      {
        id: "list",
        title: "List",
        translate: "MENU.APPS.RANKING.LIST",
        type: "item",
        icon: "circle",
        url: "apps/user/user-list",
      },
      {
        id: "edit",
        title: "Edit",
        translate: "MENU.APPS.RANKING.EDIT",
        type: "item",
        icon: "circle",
        url: "apps/user/user-edit",
      },
    ],
  },
];
