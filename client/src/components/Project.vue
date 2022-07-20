<template>
  <section class="projects scroll-spy" id="projects123">
    <div class="inner">
      <div class="title center">대표 프로젝트 (차트)</div>
      <ul>
        <li class="project project1">
          <div class="text">
            <span class="badge stable">Stable</span>
            <div class="strategyTitle smallTitle">
              투자전략1 (Spot, LEVERAGE: ⅹ1)
            </div>
            <div class="projectName">AUTO/USDT (ⅹ1)</div>
            <div class="projectInfo">
              대상: 상대적으로 낮은 유동성을 가진 마켓에 적합<br />
              규모: $100,000 이하 소규모 자산<br />
              특징: 낮은 리스크, 안정적인수익<br />
              목표: 코인 가격 10배 이상 도달 시 수익 실현 예정
            </div>
          </div>
          <div class="rela">
            <slot name="chart1"></slot>
            <slot name="chart11"></slot>
            <div class="p-ab1">Operating Time (H)</div>
          </div>
        </li>
        <li class="project project2">
          <div class="text">
            <span class="badge highVolatility">High Volatility</span>
            <div class="strategyTitle smallTitle">투자 전략 2 (Spot, x3)</div>
            <div class="projectName">LUNC/USDT (x3)</div>
            <div class="projectInfo">
              대상: 높은 변동성을 가진 마켓에 적합
              <br />
              규모: $200,000 내외 중소규모 자산<br />특징: 높은 변동성을 활용한
              디믹스 마이닝 알고리즘을 최대한 활용하여 수익 극대화
              <br />
              목표: 초기 코인 가격 2~3배 도달 시 수익 실현
            </div>
          </div>
          <div class="rela">
            <slot name="chart2"></slot>
            <slot name="chart22"></slot>
            <div class="p-ab1">Operating Time (H)</div>
          </div>
        </li>
        <li class="project project3">
          <div class="text">
            <span class="badge veryHighVolatility">Very High Volatility </span>
            <div class="strategyTitle smallTitle">
              투자 전략 3 (Future, x5~x10)
            </div>
            <div class="projectName">LUNA2/BUSD (x10)</div>
            <div class="projectInfo">
              대상: 매우 높은 변동성을 가진 마켓에 적합 하락장(장기 우하향),
              다양한 전략 구사 가능
              <br />
              규모: $100,000 이하 소규모 자산<br />특징: 매우 높은 변동성에서
              극한의 수익 창출<br />
              목표: 가격 2배 이상 도달 시 수익 실현하거나 투자전략 2로 전환,
              USDT/BUSD 수량 증대
            </div>
          </div>
          <div class="rela">
            <slot name="chart3"></slot>
            <slot name="chart33"></slot>
            <div class="p-ab1">Operating Time (H)</div>
          </div>
        </li>
        <li class="project project4">
          <div class="text">
            <span class="badge highLiquidity">High Liquidity </span>
            <div class="strategyTitle smallTitle">
              투자 전략 4 (Delivery, x5~x10)
            </div>
            <div class="projectName">BTC/USD (x10)</div>
            <div class="projectInfo">
              대상: 풍부한 유동성을 가지고 장기 우상향 마켓에 적합<br />
              규모: $200,000 이상의 대규모 자산<br />특징: 회복 및 상승장에서
              코인 수량을 점진적으로 증가 높은 리스크의 선물 시장에서 디믹스
              알고리즘을 통해 리스크 최소화
              <br />
              목표: 초기 코인 가격 2~3배 도달 시 수식 실현하거나 투자 전략 1로
              전환
            </div>
          </div>
          <div class="rela">
            <slot name="chart4"></slot>
            <slot name="chart44"></slot>
            <div class="p-ab1">Operating Time (H)</div>
          </div>
        </li>
        <!-- <li class="project project5">
          <div class="text">
            <span class="badge highLiquidity">High Liquidity </span>
            <div class="strategyTitle smallTitle">
              투자 전략 5 (Delivery, x5~x10)
            </div>
            <div class="projectName">BTC/USD (x10)</div>
            <div class="projectInfo">
              대상: 풍부한 유동성을 가지고 장기 우상향 마켓에 적합<br />
              규모: $200,000 이상의 대규모 자산<br />특징: 회복 및 상승장에서
              코인 수량을 점진적으로 증가 높은 리스크의 선물 시장에서 디믹스
              알고리즘을 통해 리스크 최소화
              <br />
              목표: 초기 코인 가격 2~3배 도달 시 수식 실현하거나 투자 전략 1로
              전환
            </div>
          </div>
          <div class="rela">
            <slot name="chart5"></slot>
            <slot name="chart55"></slot>
          </div>
        </li> -->
      </ul>
    </div>
  </section>
</template>
