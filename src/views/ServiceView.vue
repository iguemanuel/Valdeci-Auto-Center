<script setup lang="ts">
import CardServiceComponent from '@/components/CardServiceComponent.vue'

import mecanicService from '@/assets/imgs/mecanica-geral.png'
import suspensionService from '@/assets/imgs/suspensao.png'
import brakeService from '@/assets/imgs/freios.png'
import alignmentService from '@/assets/imgs/alinhamento3d.png'
import balanceService from '@/assets/imgs/balanceamento.png'
import oilService from '@/assets/imgs/troca-oleo.png'
import manutentionPreventive from '@/assets/imgs/manutencao-preventiva.png'
import injectionElectronicService from '@/assets/imgs/injecao-eletronica.png'
</script>

<template>
  <div class="min-h-screen bg-white">
    <div class="title-container p-8 text-center text-black text-3xl font-bold">
      <h2 class="text-xl md:text-3xl font-black text-slate-900 tracking-tight mb-2">
        Nossos Serviços
      </h2>

      <div class="h-1.5 w-24 bg-red-600 mx-auto rounded-sm mb-2"></div>

      <p class="text-base">Aqui alguns dos serviços que oferecemos para cuidar do seu veículo</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 p-8 justify-items-center pb-16">
      <CardServiceComponent
        :img="mecanicService"
        title="Mecânica Geral"
        description="Diagnóstico e manutenção completa, reparos especializados para o seu motor e componentes essenciais do seu veículo."
      />
      <CardServiceComponent
        :img="suspensionService"
        title="Suspensão e Freios"
        description="Manutenção e reparo de sistemas de suspensão e freios para garantir uma condução segura e confortável."
      />
      <CardServiceComponent
        :img="brakeService"
        title="Freios"
        description="Segurança máxima para você e sua família com manutenção preventiva e corretiva de discos e pastilhas."
      />
      <CardServiceComponent
        :img="alignmentService"
        title="Alinhamento 3D"
        description="Tecnologia avançada para garantir o alinhamento perfeito das rodas, melhorando a dirigibilidade e prolongando a vida dos pneus."
      />
      <CardServiceComponent
        :img="balanceService"
        title="Balanceamento"
        description="Serviço essencial para evitar vibrações e garantir uma condução suave, aumentando a durabilidade dos pneus."
      />
      <CardServiceComponent
        :img="oilService"
        title="Troca de Óleo"
        description="Manutenção fundamental para o bom funcionamento do motor, utilizando óleos de alta qualidade recomendados pelo fabricante."
      />
      <CardServiceComponent
        :img="manutentionPreventive"
        title="Manutenção Preventiva"
        description="Programa completo de inspeção e manutenção para evitar falhas e garantir a longevidade do seu veículo."
      />
      <CardServiceComponent
        :img="injectionElectronicService"
        title="Injeção Eletrônica"
        description="Diagnóstico e reparo de sistemas de injeção eletrônica para otimizar o desempenho e a eficiência do combustível."
      />
    </div>
  </div>
  <div class="min-h-screen background-primary">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 justify-items-center">
      <div class="col-span-2">
        <div class="about-services">
          <span class="text-red-500 font-semibold uppercase"
            >Aqui você encontra qualidade e em quem confiar</span
          >

          <h2 class="mt-4 uppercase font-bold text-white text-3xl">
            Por que escolher nossos serviços?
          </h2>
          <p class="mt-4 text-white">
            No Valdeci Auto Center, priorizamos a satisfação do cliente e a excelência em cada
            serviço prestado. Nossa equipe de profissionais altamente qualificados utiliza
            equipamentos modernos e técnicas avançadas para garantir que seu veículo receba o melhor
            cuidado possível. Com um compromisso firme com a transparência, oferecemos orçamentos
            claros e justos, assegurando que você esteja sempre informado sobre o que está sendo
            feito. Escolher nossos serviços significa optar por qualidade, confiança e um
            atendimento personalizado que coloca suas necessidades em primeiro lugar.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
