<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\LandingPageSetting;

class UpdateLandingPageCRO extends Command
{
    protected $signature = 'landing:update-cro';
    protected $description = 'Apply CRO-optimised content to the landing page';

    public function handle()
    {
        $settings = LandingPageSetting::first();

        if (!$settings) {
            $this->error('No landing page settings found. Visit the site once first.');
            return 1;
        }

        $config = $settings->config_sections;

        foreach ($config['sections'] as &$section) {

            if ($section['key'] === 'hero') {
                $section['title']                 = 'Stop Handing Out Paper Cards.';
                $section['subtitle']              = 'One tap. Every connection saved. Kardex turns any phone into a networking moment — no app needed on either end.';
                $section['announcement_text']     = '🔥 847 signups this month · Free plan, no credit card required';
                $section['primary_button_text']   = 'Get My Free Card →';
                $section['secondary_button_text'] = 'See How It Works ↓';
                $section['stats'] = [
                    ['value' => '10K+', 'label' => 'Active Users'],
                    ['value' => '4.9★', 'label' => 'Avg Rating'],
                    ['value' => '99%',  'label' => 'Satisfaction'],
                ];
            }

            if ($section['key'] === 'why_choose_us') {
                $section['title']    = 'Why Professionals Choose Kardex';
                $section['subtitle'] = 'Not just a digital card — a living profile that works for you 24/7.';
                $section['reasons'] = [
                    ['title' => 'Set Up in 2 Minutes',           'description' => 'Create your card, share it instantly. No design skills needed.',                                          'icon' => 'clock'],
                    ['title' => 'No App on Either End',          'description' => 'They tap or scan — their browser opens your profile. Zero friction, zero downloads.',                     'icon' => 'smartphone'],
                    ['title' => 'Update Once, Reflect Everywhere','description' => 'Changed jobs? New number? Update your card once and every previous share updates automatically.',           'icon' => 'refresh-cw'],
                    ['title' => 'Real Analytics',                 'description' => 'See who viewed your card, what they clicked, and when. Turn every introduction into insight.',             'icon' => 'bar-chart'],
                ];
            }

            if ($section['key'] === 'testimonials') {
                $section['subtitle']    = 'Join 10,000+ professionals who ditched paper cards.';
                $section['trust_title'] = 'Trusted by Professionals in 50+ Countries';
                $section['trust_stats'] = [
                    ['value' => '4.9/5',  'label' => 'Average Rating', 'color' => 'blue'],
                    ['value' => '10K+',   'label' => 'Happy Users',    'color' => 'green'],
                    ['value' => '30-day', 'label' => 'Money-Back',     'color' => 'purple'],
                ];
                $section['testimonials'] = [
                    [
                        'name'    => 'Jamie K.',
                        'role'    => 'Founder',
                        'company' => 'Elevate Labs',
                        'content' => 'Handed my Kardex at a conference. The person\'s face when their phone just opened my profile — priceless. Ordered 3 more for my team.',
                        'rating'  => 5,
                    ],
                    [
                        'name'    => 'Sofia C.',
                        'role'    => 'Head of Sales',
                        'company' => 'Revelo',
                        'content' => 'Changed jobs 3 times last year. Zero reprints. Just updated my profile and every card I\'d ever shared automatically reflected the change.',
                        'rating'  => 5,
                    ],
                    [
                        'name'    => 'Marcus L.',
                        'role'    => 'VC Partner',
                        'company' => 'Northbridge',
                        'content' => 'The analytics dashboard is a game-changer. I can see exactly which links people click after meeting me. It\'s like CRM for networking.',
                        'rating'  => 5,
                    ],
                ];
            }

            if ($section['key'] === 'faq') {
                $section['faqs'] = [
                    [
                        'question' => 'Does the person I share with need an app?',
                        'answer'   => 'No app required on either end. When someone taps your Kardex or scans your QR code, their browser opens your profile instantly. Works on any iPhone (iOS 11+) or Android (6.0+).',
                    ],
                    [
                        'question' => 'What if I change jobs or update my info?',
                        'answer'   => 'Update your profile once in the dashboard and every card you\'ve ever shared reflects your new info the next time it\'s viewed. Zero reprints, ever.',
                    ],
                    [
                        'question' => 'Is there really a free plan?',
                        'answer'   => 'Yes — create a free digital card with a custom profile URL, up to 5 links, and basic analytics. No credit card required, no expiry.',
                    ],
                    [
                        'question' => 'Are there any hidden or recurring fees?',
                        'answer'   => 'The free plan is always free. Paid plans are billed monthly or annually — no hidden fees, no gotchas. Cancel anytime from your dashboard.',
                    ],
                    [
                        'question' => 'Is my data private and secure?',
                        'answer'   => 'You control exactly what\'s visible on your profile. Analytics are anonymised. We never sell your data or that of your connections.',
                    ],
                ];
            }

            if ($section['key'] === 'plans') {
                $section['subtitle'] = 'Start free — upgrade when you\'re ready. No credit card required.';
            }
        }
        unset($section);

        $settings->config_sections = $config;
        $settings->save();

        $this->info('✅ Landing page CRO content updated successfully.');
        return 0;
    }
}
