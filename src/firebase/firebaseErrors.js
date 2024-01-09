const firebaseErrors = {
  // Erros de Autenticação
  'auth/wrong-password':
    'A senha é inválida ou o usuário não possui uma senha.',
  'auth/claims-too-large':
    'A carga de claims fornecida para setCustomUserClaims() excede o tamanho máximo permitido de 1000 bytes.',
  'auth/email-already-exists':
    'O email fornecido já está em uso por um usuário existente. Cada usuário deve ter um email único.',
  'auth/id-token-expired': 'O token de ID do Firebase fornecido está expirado.',
  'auth/id-token-revoked': 'O token de ID do Firebase foi revogado.',
  'auth/insufficient-permission':
    'A credencial usada para inicializar o SDK do Admin tem permissões insuficientes para acessar o recurso de Autenticação solicitado. Consulte a documentação para configurar um projeto Firebase e gerar uma credencial com as permissões adequadas para autenticar os SDKs do Admin.',
  'auth/invalid-argument':
    'Um argumento inválido foi fornecido a um método de Autenticação. A mensagem de erro deve conter informações adicionais.',
  'auth/invalid-claims':
    'Os atributos de claims personalizados fornecidos para setCustomUserClaims() são inválidos.',
  'auth/invalid-creation-time':
    'O horário de criação deve ser uma string de data UTC válida.',
  'auth/invalid-disabled-field':
    'O valor fornecido para a propriedade de usuário desativado é inválido. Deve ser um booleano.',
  'auth/invalid-display-name':
    'O valor fornecido para a propriedade de usuário displayName é inválido. Deve ser uma string não vazia.',
  'auth/invalid-email-verified':
    'O valor fornecido para a propriedade de usuário emailVerified é inválido. Deve ser um booleano.',
  'auth/invalid-hash-algorithm':
    'O algoritmo de hash deve corresponder a uma das strings na lista de algoritmos suportados.',
  'auth/invalid-hash-block-size':
    'O tamanho do bloco de hash deve ser um número válido.',
  'auth/invalid-hash-derived-key-length':
    'O comprimento da chave derivada de hash deve ser um número válido.',
  'auth/invalid-hash-key':
    'A chave de hash deve ser um buffer de bytes válido.',
  'auth/invalid-hash-memory-cost':
    'O custo de memória do hash deve ser um número válido.',
  'auth/invalid-hash-parallelization':
    'A paralelização do hash deve ser um número válido.',
  'auth/invalid-hash-rounds': 'As rodadas de hash devem ser um número válido.',
  'auth/invalid-hash-salt-separator':
    'O campo de separador de sal de algoritmo de hash deve ser um buffer de bytes válido.',
  'auth/invalid-id-token':
    'O token de ID fornecido não é um token de ID do Firebase válido.',
  'auth/invalid-last-sign-in-time':
    'O último horário de login deve ser uma string de data UTC válida.',
  'auth/invalid-page-token':
    'O token de próxima página fornecido em listUsers() é inválido. Deve ser uma string não vazia válida.',
  'auth/invalid-password':
    'O valor fornecido para a propriedade de usuário senha é inválido. Deve ser uma string com pelo menos seis caracteres.',
  'auth/invalid-password-hash':
    'O hash de senha deve ser um buffer de bytes válido.',
  'auth/invalid-password-salt':
    'O salt de senha deve ser um buffer de bytes válido',
  'auth/invalid-photo-url':
    'O valor fornecido para a propriedade de usuário photoURL é inválido. Deve ser uma URL de string.',
  'auth/invalid-provider-data':
    'providerData deve ser um array válido de objetos UserInfo.',
  'auth/invalid-oauth-responsetype':
    'Apenas um responseType OAuth deve ser definido como true.',
  'auth/invalid-session-cookie-duration':
    'A duração do cookie de sessão deve ser um número válido em milissegundos entre 5 minutos e 2 semanas.',
  'auth/invalid-uid':
    'O UID fornecido deve ser uma string não vazia com no máximo 128 caracteres.',
  'auth/invalid-user-import': 'O registro de usuário para importar é inválido.',
  'auth/maximum-user-count-exceeded':
    'O número máximo permitido de usuários para importação foi excedido.',
  'auth/missing-hash-algorithm':
    'A importação de usuários com hashes de senha requer que o algoritmo de hash e seus parâmetros sejam fornecidos.',
  'auth/missing-uid':
    'Um identificador de UID é necessário para a operação atual.',
  'auth/missing-oauth-client-secret':
    'O segredo do cliente de configuração OAuth é necessário para habilitar o fluxo de código OIDC.',
  'auth/phone-number-already-exists':
    'O número de telefone fornecido já está em uso por um usuário existente. Cada usuário deve ter um número de telefone único.',
  'auth/project-not-found':
    'Nenhum projeto Firebase foi encontrado para a credencial usada para inicializar os SDKs do Admin. Consulte a documentação para configurar um projeto Firebase e gerar uma credencial para o seu projeto e usá-la para autenticar os SDKs do Admin.',
  'auth/reserved-claims':
    'Um ou mais claims de usuário personalizados fornecidos para setCustomUserClaims() são reservados. Por exemplo, claims específicos do OIDC como (sub, iat, iss, exp, aud, auth_time, etc) não devem ser usados como chaves para claims personalizados.',
  'auth/session-cookie-expired':
    'O cookie de sessão do Firebase fornecido está expirado.',
  'auth/session-cookie-revoked': 'O cookie de sessão do Firebase foi revogado.',
  'auth/uid-already-exists':
    'O UID fornecido já está em uso por um usuário existente. Cada usuário deve ter um UID único.',
  'auth/admin-restricted-operation':
    'Esta operação é restrita apenas a administradores.',
  'auth/app-not-authorized':
    'Este aplicativo, identificado pelo domínio onde está hospedado, não está autorizado a usar a Autenticação Firebase com a chave de API fornecida. Revise a configuração da chave na console da API do Google.',
  'auth/app-not-installed':
    'O aplicativo móvel solicitado correspondente ao identificador (nome do pacote Android ou ID do pacote iOS) fornecido não está instalado neste dispositivo.',
  'auth/captcha-check-failed':
    'O token de resposta reCAPTCHA fornecido é inválido, expirado, já foi usado ou o domínio associado a ele não corresponde à lista de domínios autorizados.',
  'auth/code-expired':
    'O código SMS expirou. Por favor, reenvie o código de verificação para tentar novamente.',
  'auth/cordova-not-ready': 'O framework Cordova não está pronto.',
  'auth/cors-unsupported': 'Este navegador não é suportado.',
  'auth/credential-already-in-use':
    'Esta credencial já está associada a uma conta de usuário diferente.',
  'auth/custom-token-mismatch':
    'O token personalizado corresponde a uma audiência diferente.',
  'auth/requires-recent-login':
    'Esta operação é sensível e requer autenticação recente. Faça login novamente antes de tentar esta solicitação.',
  'auth/dependent-sdk-initialized-before-auth':
    'Outro SDK Firebase foi inicializado e está tentando usar a Autenticação antes que a Autenticação seja inicializada. Certifique-se de chamar `initializeAuth` ou `getAuth` antes de iniciar qualquer outro SDK Firebase.',
  'auth/dynamic-link-not-activated':
    'Ative os Links Dinâmicos no Console do Firebase e concorde com os termos e condições.',
  'auth/email-change-needs-verification':
    'Usuários de autenticação de vários fatores devem sempre ter um email verificado.',
  'auth/email-already-in-use':
    'O endereço de email já está em uso por outra conta.',
  'auth/emulator-config-failed':
    "A instância de autenticação já foi usada para fazer uma chamada de rede. A Autenticação não pode mais ser configurada para usar o emulador. Tente chamar 'connectAuthEmulator()' mais cedo.",
  'auth/expired-action-code': 'O código de ação expirou.',
  'auth/cancelled-popup-request':
    'Esta operação foi cancelada devido a outra janela pop-up conflitante sendo aberta.',
  'auth/internal-error': 'Ocorreu um erro interno do Auth.',
  'auth/invalid-app-credential':
    'A solicitação de verificação de telefone contém um verificador de aplicativo inválido. A resposta do token reCAPTCHA é inválida ou expirou.',
  'auth/invalid-app-id':
    'O identificador do aplicativo móvel não está registrado para o projeto atual.',
  'auth/invalid-user-token':
    'As credenciais deste usuário não são válidas para este projeto. Isso pode acontecer se o token do usuário foi alterado ou se o usuário não é do projeto associado a esta chave API.',
  'auth/invalid-auth-event': 'Ocorreu um erro interno do Auth.',
  'auth/invalid-verification-code':
    'O código de verificação SMS usado para criar a credencial de autenticação por telefone é inválido. Por favor, reenvie o código de verificação SMS e certifique-se de usar o código de verificação fornecido pelo usuário.',
  'auth/invalid-continue-uri':
    'A URL de continuação fornecida na solicitação é inválida.',
  'auth/invalid-cordova-configuration':
    'Os seguintes plugins Cordova devem estar instalados para permitir o login via OAuth: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser e cordova-plugin-customurlscheme.',
  'auth/invalid-custom-token':
    'O formato do token personalizado está incorreto. Consulte a documentação.',
  'auth/invalid-dynamic-link-domain':
    'O domínio de link dinâmico fornecido não está configurado ou autorizado para o projeto atual.',
  'auth/invalid-email': 'Digite um email válido.',
  'auth/invalid-emulator-scheme':
    'A URL do emulador deve começar com um esquema válido (http:// ou https://).',
  'auth/invalid-api-key':
    'Sua chave de API é inválida, verifique se você a copiou corretamente.',
  'auth/invalid-cert-hash': 'O hash do certificado SHA-1 fornecido é inválido.',
  'auth/invalid-credential':
    'A credencial de autenticação fornecida é malformada ou expirou.',
  'auth/invalid-message-payload':
    'O modelo de email correspondente a esta ação contém caracteres inválidos em sua mensagem. Corrija acessando a seção de modelos de email de autenticação no Console do Firebase.',
  'auth/invalid-multi-factor-session':
    'A solicitação não contém uma prova válida de login bem-sucedido no primeiro fator.',
  'auth/invalid-oauth-provider':
    'EmailAuthProvider não é suportado para esta operação. Esta operação suporta apenas provedores OAuth.',
  'auth/invalid-oauth-client-id':
    'O ID do cliente OAuth fornecido é inválido ou não corresponde à chave API especificada.',
  'auth/unauthorized-domain':
    'Este domínio não está autorizado para operações OAuth em seu projeto Firebase. Edite a lista de domínios autorizados na console do Firebase.',
  'auth/invalid-action-code':
    'O código de ação é inválido. Isso pode acontecer se o código estiver malformado, expirado ou já tiver sido usado.',
  'auth/invalid-persistence-type':
    'O tipo de persistência especificado é inválido. Pode ser apenas local, sessão ou nenhum.',
  'auth/invalid-phone-number':
    'O formato do número de telefone fornecido está incorreto. Por favor, insira o número de telefone em um formato que possa ser analisado no formato E.164. Números de telefone E.164 são escritos no formato [+][código do país][número do assinante incluindo código de área].',
  'auth/invalid-provider-id': 'O ID do provedor especificado é inválido.',
  'auth/invalid-recipient-email':
    'O email correspondente a esta ação falhou ao ser enviado, pois o endereço de email do destinatário fornecido é inválido.',
  'auth/invalid-sender':
    'O modelo de email correspondente a esta ação contém um email ou nome de remetente inválido. Corrija acessando a seção de modelos de email de autenticação no Console do Firebase.',
  'auth/invalid-verification-id':
    'O ID de verificação usado para criar a credencial de autenticação por telefone é inválido.',
  'auth/invalid-tenant-id': 'O ID do locatário da instância Auth é inválido.',
  'auth/missing-android-pkg-name':
    'É necessário fornecer um Nome de Pacote Android se o aplicativo Android precisar ser instalado.',
  'auth/auth-domain-config-required':
    'Inclua authDomain ao chamar firebase.initializeApp(), seguindo as instruções no console do Firebase.',
  'auth/missing-app-credential':
    'A solicitação de verificação do telefone está sem uma afirmação do verificador de aplicativo. É necessário fornecer um token de resposta reCAPTCHA.',
  'auth/missing-verification-code':
    'A credencial de autenticação por telefone foi criada sem um código de verificação SMS.',
  'auth/missing-continue-uri':
    'É necessário fornecer uma URL de continuação na solicitação.',
  'auth/missing-iframe-start': 'Ocorreu um erro interno de AuthError.',
  'auth/missing-ios-bundle-id':
    'É necessário fornecer um iOS Bundle ID se um ID de App Store for fornecido.',
  'auth/missing-or-invalid-nonce':
    'A solicitação não contém um nonce válido. Isso pode ocorrer se o hash SHA-256 do nonce bruto fornecido não coincidir com o nonce hash no payload do token de ID.',
  'auth/missing-multi-factor-info':
    'Nenhum identificador de segundo fator foi fornecido.',
  'auth/missing-multi-factor-session':
    'A solicitação está sem a comprovação do login bem-sucedido do primeiro fator.',
  'auth/missing-phone-number':
    'Para enviar códigos de verificação, forneça um número de telefone para o destinatário.',
  'auth/missing-verification-id':
    'A credencial de autenticação por telefone foi criada sem um ID de verificação.',
  'auth/app-deleted': 'Esta instância do FirebaseApp foi excluída.',
  'auth/multi-factor-info-not-found':
    'O usuário não tem um segundo fator correspondente ao identificador fornecido.',
  'auth/multi-factor-auth-required':
    'A prova de propriedade de um segundo fator é necessária para concluir o login.',
  'auth/account-exists-with-different-credential':
    'Já existe uma conta com o mesmo endereço de e-mail, mas credenciais de login diferentes. Faça login usando um provedor associado a este endereço de e-mail.',
  'auth/network-request-failed':
    'Um erro de rede AuthError (como tempo limite, conexão interrompida ou host inacessível) ocorreu.',
  'auth/no-auth-event': 'Ocorreu um erro interno de AuthError.',
  'auth/no-such-provider':
    'O usuário não estava vinculado a uma conta com o provedor fornecido.',
  'auth/null-user':
    'Foi fornecido um objeto de usuário nulo como argumento para uma operação que requer um objeto de usuário não nulo.',
  'auth/operation-not-allowed':
    'O provedor de login fornecido está desativado para este projeto Firebase. Ative-o no console do Firebase, na guia de método de login da seção de Autenticação.',
  'auth/operation-not-supported-in-this-environment':
    'Esta operação não é suportada no ambiente em que este aplicativo está sendo executado. O "location.protocol" deve ser http, https ou chrome-extension, e o armazenamento web deve estar habilitado.',
  'auth/popup-blocked':
    'Não foi possível estabelecer uma conexão com o pop-up. Pode ter sido bloqueado pelo navegador.',
  'auth/popup-closed-by-user':
    'O pop-up foi fechado pelo usuário antes de finalizar a operação.',
  'auth/provider-already-linked':
    'O usuário só pode ser vinculado a uma identidade para o provedor fornecido.',
  'auth/quota-exceeded': 'A cota do projeto para esta operação foi excedida.',
  'auth/redirect-cancelled-by-user':
    'A operação de redirecionamento foi cancelada pelo usuário antes de ser concluída.',
  'auth/redirect-operation-pending':
    'Uma operação de login por redirecionamento já está pendente.',
  'auth/rejected-credential':
    'A solicitação contém credenciais malformadas ou incompatíveis.',
  'auth/second-factor-already-in-use':
    'O segundo fator já está cadastrado nesta conta.',
  'auth/maximum-second-factor-count-exceeded':
    'O número máximo permitido de segundos fatores em um usuário foi excedido.',
  'auth/tenant-id-mismatch':
    'O ID do locatário fornecido não corresponde ao ID do locatário da instância de Auth.',
  'auth/timeout': 'A operação expirou.',
  'auth/user-token-expired':
    'As credenciais do usuário não são mais válidas. O usuário precisa fazer login novamente.',
  'auth/too-many-requests':
    'Bloqueamos todas as solicitações deste dispositivo devido a atividade incomum. Tente novamente mais tarde.',
  'auth/unauthorized-continue-uri':
    'O domínio da URL de continuação não está na lista branca. Por favor, adicione o domínio à lista branca no console do Firebase.',
  'auth/unsupported-first-factor':
    'Registrar um segundo fator ou fazer login com uma conta de vários fatores requer fazer login com um primeiro fator suportado.',
  'auth/unsupported-persistence-type':
    'O ambiente atual não suporta o tipo de persistência especificado.',
  'auth/unsupported-tenant-operation':
    'Esta operação não é suportada em um contexto de vários locatários.',
  'auth/unverified-email': 'A operação requer um e-mail verificado.',
  'auth/user-cancelled':
    'O usuário não concedeu as permissões solicitadas pela aplicação.',
  'auth/user-not-found':
    'Não há registro de usuário correspondente a este identificador. O usuário pode ter sido excluído.',
  'auth/user-disabled':
    'A conta do usuário foi desativada por um administrador.',
  'auth/user-mismatch':
    'As credenciais fornecidas não correspondem ao usuário anteriormente autenticado.',
  'auth/weak-password': 'A senha deve ter pelo menos 6 caracteres.',
  'auth/web-storage-unsupported':
    'Este navegador não é suportado ou cookies de terceiros e dados podem estar desativados.',
  'auth/already-initialized':
    'initializeAuth() já foi chamado com opções diferentes. Para evitar este erro, chame initializeAuth() com as mesmas opções que foram originalmente chamadas, ou chame getAuth() para retornar a instância já inicializada.',
  cancelled: 'A operação foi cancelada (geralmente pelo chamador).',
  unknown: 'Erro desconhecido ou um erro de um domínio de erro diferente.',
  'invalid-argument':
    'Cliente especificou um argumento inválido. Note que isso difere de "failed-precondition". "invalid-argument" indica argumentos problemáticos independentemente do estado do sistema (por exemplo, um nome de campo inválido).',
  'deadline-exceeded':
    'Prazo expirado antes que a operação pudesse ser concluída. Para operações que alteram o estado do sistema, esse erro pode ser retornado mesmo que a operação tenha sido concluída com sucesso. Por exemplo, uma resposta bem-sucedida de um servidor pode ter sido atrasada tempo suficiente para que o prazo expire.',
  'not-found': 'Alguns documentos solicitados não foram encontrados.',
  'already-exists': 'Algum documento que tentamos criar já existe.',
  'permission-denied':
    'O chamador não tem permissão para executar a operação especificada.',
  'resource-exhausted':
    'Algum recurso foi esgotado, talvez uma cota por usuário, ou talvez o sistema de arquivos inteiro esteja sem espaço.',
  'failed-precondition':
    'A operação foi rejeitada porque o sistema não está no estado necessário para a execução da operação.',
  aborted:
    'A operação foi abortada, geralmente devido a um problema de concorrência como abortos de transação, etc.',
  'out-of-range': 'A operação foi tentada além da faixa válida.',
  unimplemented: 'Operação não implementada ou não suportada/habilitada.',
  internal:
    'Erros internos. Indica que algumas invariantes esperadas pelo sistema subjacente foram quebradas. Se você ver um desses erros, algo está muito errado.',
  unavailable:
    'O serviço está atualmente indisponível. Isso é provavelmente uma condição transitória e pode ser corrigido tentando novamente com uma espera.',
  'data-loss': 'Perda ou corrupção irreparável de dados.',
  unauthenticated:
    'A solicitação não possui credenciais de autenticação válidas para a operação.'
};

export default firebaseErrors;
