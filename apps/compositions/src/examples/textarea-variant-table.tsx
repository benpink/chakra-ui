"use client"

import { For, Span, Textarea, useRecipe } from "@chakra-ui/react"
import { PlaygroundTable } from "compositions/lib/playground-table"

export const TextareaVariantTable = () => {
  const recipe = useRecipe("input")
  return (
    <PlaygroundTable>
      <tbody>
        <For each={recipe.variantMap.variant}>
          {(v) => (
            <tr>
              <td>
                <Span fontSize="sm" color="fg.muted" minW="8ch">
                  {v}
                </Span>
              </td>
              <td>
                <Textarea variant={v} placeholder="Placeholder" />
              </td>
            </tr>
          )}
        </For>
        <tr>
          <td>
            <Span fontSize="sm" color="fg.muted" minW="8ch">
              unstyled
            </Span>
          </td>
          <td>
            <Textarea minW="320px" placeholder="Placeholder" />
          </td>
        </tr>
      </tbody>
    </PlaygroundTable>
  )
}
