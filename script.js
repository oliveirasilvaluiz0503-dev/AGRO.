import java.util.Scanner;

public class CalculadorSustentabilidade {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("=== Sistema AgroForte: Avaliação de Sustentabilidade ===");
        
        System.out.print("Digite o tamanho total da propriedade (em hectares): ");
        double areaTotal = scanner.nextDouble();

        System.out.print("Digite a área destinada à preservação/APP (em hectares): ");
        double areaPreservada = scanner.nextDouble();

        System.out.print("A propriedade utiliza rotação de culturas? (true/false): ");
        boolean usaRotacao = scanner.nextBoolean();

        // Cálculo do percentual de área preservada
        double percentualPreservacao = (areaPreservada / areaTotal) * 100;

        // Regra de negócio simples para calcular a nota de sustentabilidade
        int pontuacao = 0;

        if (percentualPreservacao >= 20.0) { // Mínimo do Código Florestal para várias regiões
            pontuacao += 50;
        } else {
            pontuacao += (percentualPreservacao * 2.5); // Pontuação proporcional
        }

        if (usaRotacao) {
            pontuacao += 50;
        }

        // Exibição dos resultados (Simulando o processamento que iria para o front-end)
        System.out.println("\n--- RELATÓRIO DE IMPACTO ---");
        System.out.printf("Percentual de Preservação Ecológica: %.2f%%\n", percentualPreservacao);
        System.out.println("Pontuação de Sustentabilidade do Agro: " + pontuacao + "/100");

        if (pontuacao >= 80) {
            System.out.println("Classificação: Selo Verde - Agro Forte e Totalmente Sustentável!");
        } else if (pontuacao >= 50) {
            System.out.println("Classificação: Em Transição - Bom equilíbrio, mas pode melhorar.");
        } else {
            System.out.println("Classificação: Alerta - Necessário adequar práticas ambientais.");
        }

        scanner.close();
    }
}
