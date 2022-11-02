import React, {lazy, Suspense} from "react";
import {Navigate, RouteObject, useRoutes} from "react-router-dom";
import Loading from "@/noddle-components/loading";
import content from "@/layout/content";

namespace SyncRoute {
    export type Routes = {
        path: string,
        component: any,
        children?: Routes[],
    }
    export const defaultPath = 'overview'
}

const RouteTable: SyncRoute.Routes[] = [
    {
        path: '/',
        component: lazy(() => import('@/layout')),
        children: [
            {
                path: '',
                component: () => <Navigate to={SyncRoute.defaultPath}/>
            },
            {
                path: 'test',
                component: lazy(() => import('@/pages/test/test'))
            },
            {
                path: 'getting-started',
                component: lazy(() => import('@/pages/getting-started'))
            },
            {
                path: 'changelog',
                component: lazy(() => import('@/pages/changelog'))
            },
            {
                path: 'overview',
                component: lazy(() => import('@/pages/overview'))
            },
            {
                path: 'components',
                component: lazy(() => import('@/pages/components')),
                children: [
                    {
                        path: '',
                        component: () => <Navigate to={'globalConfig'}/>
                    },
                    {
                        path: 'globalConfig',
                        component: lazy(() => import('@/pages/components/globalConfig'))
                    },
                    {
                        path: 'select',
                        component: lazy(() => import('@/pages/components/select'))
                    },
                    {
                        path: 'loading',
                        component: lazy(() => import('@/pages/components/loading'))
                    },
                    {
                        path: 'button',
                        component: lazy(() => import('@/pages/components/button'))
                    },
                    {
                        path: 'table',
                        component: lazy(() => import('@/pages/components/table'))
                    },
                    {
                        path: 'divider',
                        component: lazy(() => import('@/pages/components/divider'))
                    },
                    {
                        path: 'space',
                        component: lazy(() => import('@/pages/components/space'))
                    },
                    {
                        path: 'text',
                        component: lazy(() => import('@/pages/components/text'))
                    },
                    {
                        path: 'form',
                        component: lazy(() => import('@/pages/components/form'))
                    },
                    {
                        path: 'timeline',
                        component: lazy(() => import('@/pages/components/timeline'))
                    },
                    {
                        path: 'switch',
                        component: lazy(() => import('@/pages/components/switch'))
                    },
                    {
                        path: 'tooltips',
                        component: lazy(() => import('@/pages/components/tooltips'))
                    },
                    {
                        path: 'message',
                        component: lazy(() => import('@/pages/components/message'))
                    },
                    {
                        path: 'notification',
                        component: lazy(() => import('@/pages/components/notification'))
                    },
                    {
                        path: 'tag',
                        component: lazy(() => import('@/pages/components/tag'))
                    },
                    {
                        path: 'tabs',
                        component: lazy(() => import('@/pages/components/tabs'))
                    },
                    {
                        path: 'badge',
                        component: lazy(() => import('@/pages/components/badge'))
                    },
                    {
                        path: 'list',
                        component: lazy(() => import('@/pages/components/list'))
                    },
                    {
                        path: 'card',
                        component: lazy(() => import('@/pages/components/card'))
                    }
                ]
            },
        ]
    },
    {
        path: '*',
        component: lazy(() => import('@/pages/404'))
    }
]

const syncRouter = (table: SyncRoute.Routes[]): RouteObject[] => {
    let mRouteTable: RouteObject[] = []
    table.forEach(route => {
        mRouteTable.push({
            path: route.path,
            element: (
                <Suspense fallback={<div style={{padding: 20}}><Loading/></div>}>
                    <route.component/>
                </Suspense>
            ),
            //递归生成进一层的children
            children: route.children && syncRouter(route.children)
        })
    })
    return mRouteTable
}

// 直接暴露成一个组件调用
export default () => useRoutes(syncRouter(RouteTable))
