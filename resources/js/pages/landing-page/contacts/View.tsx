import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useTranslation } from 'react-i18next';
import { Mail } from 'lucide-react';

interface ViewProps {
    contact: any;
}

export default function View({ contact }: ViewProps) {
    const { t } = useTranslation();

    const getStatusColor = (status: string) => {
        const colors: Record<string, string> = {
            'new': 'bg-blue-100 text-blue-800',
            'contacted': 'bg-yellow-100 text-yellow-800',
            'qualified': 'bg-purple-100 text-purple-800',
            'converted': 'bg-green-100 text-green-800',
            'closed': 'bg-gray-100 text-gray-800'
        };
        return colors[status] || 'bg-gray-100 text-gray-800';
    };

    return (
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader className="pb-4 border-b">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                        <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                        <DialogTitle className="text-xl font-semibold">{t('Contact Details')}</DialogTitle>
                        <p className="text-sm text-muted-foreground">{contact.name}</p>
                    </div>
                </div>
            </DialogHeader>

            <div className="overflow-y-auto flex-1 p-4 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">{t('Name')}</label>
                        <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{contact.name}</p>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">{t('Email')}</label>
                        <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">{contact.email || '-'}</p>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">{t('Status')}</label>
                        <div className="bg-gray-50 p-2 rounded">
                            <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10 ${getStatusColor(contact.status)}`}>
                                {contact.status?.charAt(0).toUpperCase() + contact.status?.slice(1) || '-'}
                            </span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">{t('Created At')}</label>
                        <p className="text-sm text-gray-900 bg-gray-50 p-2 rounded">
                            {window.superAdminSettings?.formatDateTime(contact.created_at, true) ||
                                window.appSettings?.formatDateTime(contact.created_at, true) ||
                                new Date(contact.created_at).toLocaleDateString()}
                        </p>
                    </div>
                </div>
                {contact.subject && (
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">{t('Subject')}</label>
                        <div className="text-sm text-gray-900 bg-gray-50 p-3 rounded whitespace-pre-wrap break-words">
                            {contact.subject}
                        </div>
                    </div>
                )}
                {contact.message && (
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">{t('Message')}</label>
                        <div className="text-sm text-gray-900 bg-gray-50 p-3 rounded whitespace-pre-wrap break-words">
                            {contact.message}
                        </div>
                    </div>
                )}

                {contact.reply && (
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">{t('Reply')}</label>
                        <div className="text-sm text-gray-900 bg-blue-50 p-3 rounded whitespace-pre-wrap break-words border border-blue-200">
                            {contact.reply}
                        </div>
                    </div>
                )}
            </div>
        </DialogContent>
    );
}
