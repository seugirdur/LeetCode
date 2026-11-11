class Solution:
    def allCellsDistOrder(self, rows: int, cols: int, rCenter: int, cCenter: int) -> List[List[int]]:
        matrix = []

        # gera todas as coordenadas
        for i in range(rows):
            for j in range(cols):
                matrix.append([i, j])

        # ordena pela distância de Manhattan até o centro
        matrix.sort(key=lambda x: abs(x[0] - rCenter) + abs(x[1] - cCenter))

        return matrix
