import React, {lazy, Suspense} from "react";
import {Navigate, RouteObject, useRoutes} from "react-router-dom";
import defaultPath = SyncRoute.defaultPath;

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
                path: '/',
                component: () => <Navigate to={SyncRoute.defaultPath}/>
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
                        path: 'globalConfig',
                        component: lazy(() => import('@/pages/components/globalConfig'))
                    },
                    {
                        path: 'select',
                        component: lazy(() => import('@/pages/components/select'))
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
                <Suspense fallback={<div>路由加载ing...</div>}>
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
