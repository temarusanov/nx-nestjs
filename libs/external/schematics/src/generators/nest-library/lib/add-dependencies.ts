import type { GeneratorCallback, Tree } from '@nx/devkit'
import { addDependenciesToPackageJson } from '@nx/devkit'

import {
    nestJsVersion,
    nxVersion,
    reflectMetadataVersion,
    rxjsVersion,
    tsLibVersion,
} from '../../../utils/versions'

export function addDependencies(tree: Tree): GeneratorCallback {
    return addDependenciesToPackageJson(
        tree,
        {
            '@nestjs/common': nestJsVersion,
            '@nestjs/core': nestJsVersion,
            '@nestjs/platform-express': nestJsVersion,
            'reflect-metadata': reflectMetadataVersion,
            rxjs: rxjsVersion,
            tslib: tsLibVersion,
        },
        {
            '@nestjs/schematics': nestJsVersion,
            '@nestjs/testing': nestJsVersion,
            '@nx/nest': nxVersion,
        },
    )
}
