/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/eslint-plugin-rxjs
 */

import { TSESTree as es } from "@typescript-eslint/experimental-utils";
import { getTypeServices, isMemberExpression } from "eslint-etc";
import * as tsutils from "tsutils";
import { couldBeType, isReferenceType, isUnionType } from "tsutils-etc";
import * as ts from "typescript";
import { ruleCreator } from "../utils";

const rule = ruleCreator({
  defaultOptions: [],
  meta: {
    docs: {
      category: "Best Practices",
      description: "Forbids unsafe optional `next` calls.",
      recommended: false,
    },
    fixable: null,
    messages: {
      forbidden: "Unsafe optional next calls are forbidden.",
    },
    schema: null,
    type: "problem",
  },
  name: "no-unsafe-subject-next",
  create: (context) => {
    const { nodeMap, typeChecker } = getTypeServices(context);
    return {
      [`CallExpression[callee.property.name='next']`]: (
        node: es.CallExpression
      ) => {
        if (node.arguments.length === 0 && isMemberExpression(node.callee)) {
          const type = typeChecker.getTypeAtLocation(
            nodeMap.get(node.callee.object)
          );
          if (isReferenceType(type) && couldBeType(type, "Subject")) {
            const [typeArg] = typeChecker.getTypeArguments(type);
            if (tsutils.isTypeFlagSet(typeArg, ts.TypeFlags.Any)) {
              return;
            }
            if (tsutils.isTypeFlagSet(typeArg, ts.TypeFlags.Unknown)) {
              return;
            }
            if (tsutils.isTypeFlagSet(typeArg, ts.TypeFlags.Void)) {
              return;
            }
            if (
              isUnionType(typeArg) &&
              typeArg.types.some((t) =>
                tsutils.isTypeFlagSet(t, ts.TypeFlags.Void)
              )
            ) {
              return;
            }
            context.report({
              messageId: "forbidden",
              node: node.callee.property,
            });
          }
        }
      },
    };
  },
});

export = rule;
